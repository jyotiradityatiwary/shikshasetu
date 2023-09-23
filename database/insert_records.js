let mysql = require('mysql');

function schoolRegister(name, email, password, location) {
    let query = `INSERT INTO Schools(name, email, password, location) VALUES ('${name}', '${email}', '${password}', '${location}')`;

    con.query(query, function (err, results) {
        if (err) throw err;
        console.log("Records Inserted: " + results.affectedRows);
    })
}

function volunteerRegister(name, email, password, phoneNumber) {
    let query = `INSERT INTO VolunteerNGOs(name, email, password, phoneNumber) VALUES ('${name}', '${email}', '${password}', ${phoneNumber})`;

    con.query(query, function (err, results) {
        if (err) throw err;
        console.log("Records Inserted: " + results.affectedRows);
    })
}


// con.end();

module.exports = { schoolRegister, volunteerRegister }
