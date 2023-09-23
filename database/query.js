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
