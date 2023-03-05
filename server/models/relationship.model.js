const db = require("../config/db.config");
const relationships = function () {};

relationships.getAllRelationships = (result) => {
  const sqlGet = "SELECT * FROM relationships;";
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

module.exports = relationships;
