let mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tiger",
  database: "ShikshaSetu",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("CONNECTION ESTABILISHED!");
});

async function getPassword(tableName, name) {
  let query = `SELECT password FROM ${tableName} WHERE name = '${name}'`;
  return new Promise(function (resolve, reject) {
    con.query(query, function (err, results) {
      if (err) throw err;
      resolve(results[0].password);
    });
  });
}

async function test() {
  let pass = await getPassword("volunteerngos", "vaibhu");
  console.log(pass);
}


test();

con.end();
