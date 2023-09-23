let mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tiger',
    database: 'ShikshaSetu'
});

con.connect(function(err){
    if (err) throw err;
    console.log("CONNECTION ESTABILISHED!");
})

function schoolLogin(name, email, password, location){
    let query = `INSERT INTO Schools(name, email, password, location) VALUES ('${name}', '${email}', '${password}', '${location}')`;

    con.query(query, function(err, results){
        if (err) throw err;
        console.log("Records Inserted: " + results.affectedRows);
    })
}

function volunteerLogin(name, email, password, phoneNumber){
    let query = `INSERT INTO VolunteerNGOs(name, email, password, phoneNumber) VALUES ('${name}', '${email}', '${password}', ${phoneNumber})`;

    con.query(query, function(err, results){
        if (err) throw err;
        console.log("Records Inserted: " + results.affectedRows);
    })
}
volunteerLogin("john", "gmail", "12345", 787454);
volunteerLogin("joe", "gmail", "12345", 787454);
volunteerLogin("biden", "gmail", "12345", 787454);
volunteerLogin("obamium", "gmail", "12345", 787454);



con.end();

