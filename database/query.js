let mysql = require("mysql");

async function getPassword(con, tableName, email) {
  let query = `SELECT password FROM ${tableName} WHERE email = '${email}'`;
  return new Promise(function (resolve, reject) {
    con.query(query, function (err, results) {
      if (err) throw err;
      console.log(results.length, results.length == 0)
      if (results.length == 0) {
        // reject("username-not-found")
        console.log('email', email, 'not found when looking up password')
        console.dir(results)
        resolve("")
        return
        console.log('nigg after resolve')
      } 
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


module.exports = {getPassword, volunteerRegister, schoolRegister}