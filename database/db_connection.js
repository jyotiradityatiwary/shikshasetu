let mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tiger',
})

con.connect(function(err){
    if (err) throw err;
    console.log("SQL connection estabilished!");
})

let query1 =  'CREATE DATABASE ShikshaSetu';

let query2 = 'USE ShikshaSetu';

let query3 = `CREATE TABLE VolunteerNGOs (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(15) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    TeachingTopics TEXT,
    PreferredLocations TEXT
)`;

let query4 = `CREATE TABLE Schools (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Location VARCHAR(255) NOT NULL
)`;

con.query(query1, function(err){
    if (err) throw err;
    console.log("DATABASE created");
})

con.query(query2, function(err){
    if (err) throw err;
    console.log("DATABASE ACCESSED!");
})

con.query(query3, function(err){
    if (err) throw err;
    console.log("TABLE VolunteerNGOs created!");
})

con.query(query4, function(err){
    if (err) throw err;
    console.log("TABLE Schools created!");
})

con.end();