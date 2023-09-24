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


function displayRecords(tableName){
    let query = `SELECT * from ${tableName}`;

    con.query(query, function(err, results, fields){
        if (err) throw err;
        for (let i = 0; i < results.length; i++){
            console.log(results[i]);
        }
    });
}

con.end();