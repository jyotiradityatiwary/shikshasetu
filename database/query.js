let mysql = require("mysql");

async function getPassword(con, tableName, name) {
  let query = `SELECT password FROM ${tableName} WHERE name = '${name}'`;
  return new Promise(function (resolve, reject) {
    con.query(query, function (err, results) {
      if (err) throw err;
      resolve(results[0].password);
    });
  });
}

function schoolRegister(con, name, email, password, location) {
    let query = `INSERT INTO Schools(name, email, password, location) VALUES ('${name}', '${email}', '${password}', '${location}')`;

    con.query(query, function (err, results) {
        if (err) throw err;
        console.log("Records Inserted: " + results.affectedRows);
    })
}

function volunteerRegister(con, name, email, password, phoneNumber) {
    let query = `INSERT INTO VolunteerNGOs(name, email, password, phoneNumber) VALUES ('${name}', '${email}', '${password}', ${phoneNumber})`;

    con.query(query, function (err, results) {
        if (err) throw err;
        console.log("Records Inserted: " + results.affectedRows);
    })
}
