const path = require('path');
const express = require('express');
const session = require('express-session')
const app = express();
const ejs = require('ejs')

const db_query = require('./database/query.js')
const db_startup = require('./database/startup.js')
const db_parser = require('./database/parsing-function.js');
const { emit } = require('process');

// database init
db_startup.main();
const con = db_startup.con;

let sessionSecret = null
if (process.env.SESSION_SECRET == "") {
    console.log("WARNING: using default session token")
    sessionSecret = "cInFvQpLdCkfhg"
} else {
    sessionSecret = process.env.SESSION_SECRET
}

// Session Setup
app.use(session({

    // It holds the secret key for session
    secret: "asdfghjkl",

    // Forces the session to be saved
    // back to the session store
    resave: true,

    // Forces a session that is "uninitialized"
    // to be saved to the store
    saveUninitialized: true
}))


//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())
// Serving static files
app.use(express.static('static'))
// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// // Session Handling
//
// app.get("/", function (req, res) {

//     // req.session.key = value
//     req.session.name = 'GeeksforGeeks'
//     return res.send("Session Set")
// })

// app.get("/session", function (req, res) {

//     var name = req.session.name
//     return res.send(name)

//     /*  To destroy session you can use
//         this function 
//      req.session.destroy(function(error){
//         console.log("Session Destroyed")
//     })
//     */
// })


// Home Page
app.get('/', (req, res) => {
    res.render('landingPage')
})

// Logout
app.post('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
})

// Volunteer
app.get('/volunteer', (req, res) => {
    if (req.session.loggedIn && req.session.loggedIn == true) {
        db_query.queryVolunteer(con, req.session.email)
            .then((value) => {
                const name = value.name
                const topicString = (value.topicString) ? value.topicString : "";
                const topicArrOfObj = db_parser.toArrofObj(topicString)
                console.dir(topicArrOfObj)
                res.render('volunteer/mainView', {name, topicArrOfObj})
            })
    } else {
        res.redirect('/volunteer/login')
    }
})

// Volunteer Login logic

app.get('/volunteer/login', (req, res) => {
    if (req.session.loggedIn && req.session.loggedIn == true) {
        res.redirect('/volunteer')
        return
    }
    res.render('volunteer/login')
})

app.post('/volunteer/login', (req, res) => {

    if (req.session.loggedIn && req.session.loggedIn == true) {
        res.redirect('/volunteer')
        return
    }

    console.dir(req.body)
    // TODO: add error checking
    // if (!(req.body.email && req.body.name && req.body.phone && req.body.password)) {
    //     app.show("Invalid Request. Required fields not provided")
    // }
    const { email, password } = req.body

    // async (email, password) => {
    //     console.log("Hello")
    // }
    // const correctPassword = await db_query.getPassword();
    db_query.getPassword(con, "volunteerngos", email)
        .then( value => {
            console.log("we got", password, "when we want", value)
            const correctPassword = value;
            if (password === correctPassword) {
                req.session.loggedIn = true;
                req.session.email = email;
                res.redirect('/volunteer')
            } else {
                const invalidLogin = true
                res.render('volunteer/login', { invalidLogin } )
            }
        } )

})


// Volunteer Register logic

app.get('/volunteer/register', (req, res) => {

    if (req.session.loggedIn && req.session.loggedIn == true) {
        res.redirect('/volunteer')
        return
    }

    res.render('volunteer/register')
})

app.post('/volunteer/register', (req, res) => {

    if (req.session.loggedIn && req.session.loggedIn == true) {
        res.render('/volunteer')
    }

    console.dir(req.body)
    // TODO: add error checking
    // if (!(req.body.email && req.body.name && req.body.phone && req.body.password)) {
    //     app.show("Invalid Request. Required fields not provided")
    // }
    const { email, name, phone, password } = req.body
    db_query.volunteerRegister(con, name, email, password, phone);
    res.redirect('/volunteer/login')

})

// Volunteer Adding New Topics
app.get('/volunteer/addTopic', (req, res) => {
    res.render('volunteer/addTopic')
})

app.post('/volunteer/addTopic', (req, res) => {
    console.log('We got a request to update queryStr. Beginning Now.')
    const newTopicObj = {topic: req.body.topic, description: req.body.description, city: req.body.city}
    if (req.session.loggedIn && req.session.loggedIn == true) {
        const email = req.session.email
        db_query.queryVolunteer(con, email)
            .then((value) => {
                const topicString = (value.topicString) ? value.topicString : "";
                const topicArrOfObj = db_parser.toArrofObj(topicString)
                console.log('topicArrofObj before mod =', topicArrOfObj)
                topicArrOfObj.push(newTopicObj)
                const newTopicStr = db_parser.toStr(topicArrOfObj)
                db_query.updateTopics(con, email, newTopicStr)
                console.dir(value.topicString)
                console.dir(topicArrOfObj)
                console.dir(newTopicObj)
                console.dir(newTopicStr)
                res.redirect('/volunteer')
                console.log('finished updating topicStr!')
            })
        } else {
            res.redirect('/volunteer/login')
        }
})

// Volunteer Topic Description
function getDescription(keyTopic, keyCity, topicArrOfObj) {
    for (let i=0; i<topicArrOfObj.length; i++) {
        if (topicArrOfObj[i].topic == keyTopic && topicArrOfObj[i].city == keyCity) {
            return topicArrOfObj[i].description
        }
    }
    return "Error: Description not found, Such entry does not exist"
}
app.get('/volunteer/description/:topicStringSpec', (req, res) => {
    console.log(req.params.topicStringSpec)
    topicStringSpec = req.params.topicStringSpec
    if (req.session.loggedIn && req.session.loggedIn == true) {
        const email = req.session.email
        db_query.queryVolunteer(con, email)
            .then((value) => {
                const topicString = (value.topicString) ? value.topicString : "";
                const topicArrOfObj = db_parser.toArrofObj(topicString)
                const topicStringSpecArr = topicStringSpec.split(';')
                const keyTopic = topicStringSpecArr[0]
                const keyCity = topicStringSpecArr[1]
                res.render('volunteer/description', {topic: keyTopic, city: keyCity, description: getDescription(keyTopic, keyCity, topicArrOfObj)})
            })
    } else {
        res.redirect('/volunteer/login')
    }
})





// School

app.get('/school', (req, res) => {
    if (req.session.loggedIn && req.session.loggedIn == true) {
        res.render('/school')
    } else {
        res.redirect('/school/login')
    }
})


// School Login logic

app.get('/school/login', (req, res) => {
    if (req.session.loggedIn && req.session.loggedIn == true) {
        res.redirect('/school')
        return
    }
    res.render('school/login')
})

app.post('/school/login', (req, res) => {

    if (req.session.loggedIn && req.session.loggedIn == true) {
        res.redirect('/school')
        return
    }

    console.dir(req.body)
    // TODO: add error checking
    // if (!(req.body.email && req.body.name && req.body.phone && req.body.password)) {
    //     app.show("Invalid Request. Required fields not provided")
    // }
    const { email, password } = req.body

    // async (email, password) => {
    //     console.log("Hello")
    // }
    // const correctPassword = await db_query.getPassword();
    db_query.getPassword(con, "schools", email)
        .then( value => {
            console.log("we got", password, "when we want", value)
            const correctPassword = value;
            if (password === correctPassword) {
                req.session.loggedIn = true;
                req.session.email = email;
                res.redirect('/school')
            } else {
                const invalidLogin = true
                res.render('school/login', { invalidLogin } )
            }
        } )

})


// School Register logic

app.get('/school/register', (req, res) => {

    if (req.session.loggedIn && req.session.loggedIn == true) {
        res.redirect('/school')
        return
    }

    res.render('school/register')
})

app.post('/school/register', (req, res) => {

    if (req.session.loggedIn && req.session.loggedIn == true) {
        res.render('/school')
    }

    console.dir(req.body)
    // TODO: add error checking
    // if (!(req.body.email && req.body.name && req.body.phone && req.body.password)) {
    //     app.show("Invalid Request. Required fields not provided")
    // }
    const { email, name, password, city } = req.body
    db_query.schoolRegister(con, name, email, password, city);
    res.redirect('/school/login')

})



// Server Start Listening

app.listen(8000, (err) => {
    if (err) throw err
    console.log("Listening on port 8000!")
})


