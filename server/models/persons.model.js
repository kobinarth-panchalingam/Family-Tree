const db = require("../config/db.config");
const persons = function () {};

persons.getAllPersons = (result) => {
  const sqlGet =
    "select p.id, p.name, p.gender, DATE_FORMAT(p.birth_date, '%Y-%M-%d') as 'Date of Birth', p.description, p.nick_name, p.image from persons p";
  db.query(sqlGet, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    if (res.length) {
      result(null, res);
      return;
    } else {
      result({ kind: "not_found" }, null);
    }
  });
};

module.exports = persons;
