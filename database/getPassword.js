let mysql = require("mysql");

con.connect(function (err) {
  if (err) throw err;
  console.log("CONNECTION ESTABILISHED!");
});

async function getPassword(con, tableName, name) {
  let query = `SELECT password FROM ${tableName} WHERE name = '${name}'`;
  return new Promise(function (resolve, reject) {
    con.query(query, function (err, results) {
      if (err) throw err;
      resolve(results[0].password);
    });
  });
}

async function test() {
  let pass = await getPassword(con, "volunteerngos", "vaibhu");
  console.log(pass);
}



// con.end();

module.exports = {getPassword}