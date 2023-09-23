const path = require('path');
const express = require('express');
const session = require('express-session')
const app = express();

// const db_insert = require('./database/insert_records.js')
const db_startup = require('./database/startup.js')

// database init
db_startup.main();

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



app.get('/', (req, res) => {
    res.render('index')
})

app.get('/volunteer', (req, res) => {
    if (req.session.loggedIn && req.session.loggedIn == true) {
        res.render('/volunteer')
    } else {
        res.redirect('/volunteer/login')
    }
})

app.get('/volunteer/login', (req, res) => {
    res.render('volunteer/login')
})

app.get('/school', (req, res) => {
    res.render('school')
})

// Login logic
app.post('/volunteer/login', (req, res) => {
    console.dir(req.body)
    if (!(req.body.email && req.body.name && req.body.phone && req.body.password)) {
        app.show("Invalid Request. Required fields not provided")
    }
    const { email, name, phone, password } = req.body

})






app.listen(8000, (err) => {
    if (err) throw err
    console.log("Listening on port 8000!")
})


