let mysql = require("mysql");

async function getPassword(con, tableName, email) {
  let query = `SELECT password FROM ${tableName} WHERE email = '${email}'`;
  return new Promise(function (resolve, reject) {
    con.query(query, function (err, results) {
      if (err) throw err;
      console.log(results.length, results.length == 0);
      if (results.length == 0) {
        resolve("");
        return;
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
  });
}

function volunteerRegister(con, name, email, password, phoneNumber) {
  let query = `INSERT INTO VolunteerNGOs(name, email, password, phoneNumber) VALUES ('${name}', '${email}', '${password}', ${phoneNumber})`;

  con.query(query, function (err, results) {
    if (err) throw err;
    console.log("Records Inserted: " + results.affectedRows);
  });
}

function queryVolunteer(con, email) {
  let query = `SELECT name, TeachingTopics from VolunteerNGOs WHERE email = '${email}'`;
  return new Promise(function (resolve, reject) {
    con.query(query, function (err, results) {
      if (err) throw err;
      if (results.length == 0) {
        resolve("");
        return;
      }
      resolve({
        name: results[0].name,
        topicString: results[0].TeachingTopics,
      });
    });
  });
}

function querySchoolLocation(con, email) {
  let query = `SELECT location from Schools WHERE email = '${email}'`;
  return new Promise(function (resolve, reject) {
    con.query(query, function (err, results) {
      if (err) throw err;
      if (results.length == 0) {
        resolve("");
        return;
      }
      resolve(results[0].location);
    });
  });
}

// function querySchoolName(con, email) {
//   let query = `SELECT name from Schools WHERE email = '${email}'`;
//   return new Promise(function (resolve, reject) {
//     con.query(query, function (err, results) {
//       if (err) throw err;
//       if (results.length == 0) {
//         resolve("");
//         return;
//       }
//       resolve(results[0].name);
//     });
//   });
// }


function getAllVolunteers(con) {
  let query = `SELECT * from VolunteerNGOs`;
  return new Promise(function (resolve, reject) {
    con.query(query, function (err, results) {
      if (err) throw err;
      resolve(results);
    });
  });
}



function updateTopics(con, email, topicStr) {
  // console.log(topicArr.join(";"));
  let query = `UPDATE VolunteerNGOs
  SET TeachingTopics = '${topicStr}'
  WHERE email = '${email}'`;
  con.query(query, function (err) {
    if (err) throw err;
    console.log("updated topics!, where email =", email, "and new topic string =", topicStr);
  });
}

module.exports = {
  getPassword,
  volunteerRegister,
  schoolRegister,
  queryVolunteer,
  updateTopics,
  getAllVolunteers,
  querySchoolLocation
};
