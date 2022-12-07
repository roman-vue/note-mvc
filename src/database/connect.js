const mongo = require("mongoose");

mongo
    .connect("mongodb://127.0.0.1:27017/notes", {})
    .then((db) => console.log("db :>> ", `db is conected`))
    .catch((err) => console.log("error:", err));

module.exports = mongo;
