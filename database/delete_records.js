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


function deleteRecords(tableName, email){
    let query = `DELETE FROM ${tableName} WHERE email = '${email}'`;

    con.query(query, function(err, results){
        if (err) throw err;
        console.log("Records Affected: " + results.affectedRows);
    })
}

// deleteRecords("schools", "b", "1234");

con.end();