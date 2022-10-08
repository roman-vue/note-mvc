const mongo = require("mongoose");

mongo
    .connect("mongodb+srv://root:MwpdjE2CP0e17EG2@cluster0.rysld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {})
    .then((db) => console.log("db :>> ", `db is conected`))
    .catch((err) => console.log("error:", err));

module.exports = mongo;
