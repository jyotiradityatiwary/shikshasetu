// This file must be run at server startup

let mysql = require("mysql");

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tiger",
    database: "ShikshaSetu",
});

function main() {
    con.connect(function (err) {
        if (err) throw err;
        console.log("CONNECTION ESTABILISHED!");
    });
}

module.exports = { main }
