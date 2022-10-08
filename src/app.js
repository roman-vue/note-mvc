const express = require("express");
const app = express();
require("./database/connect");
const path = require("path");
const ehbs = require("express-handlebars");
const connect = require("connect-flash");
const method = require("method-override");
const expressSession = require("express-session");
const morgan = require("morgan");

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
    ".hbs",
    ehbs.engine({
        defaultLayout: "main",
        layoutDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        extname: ".hbs",
    })
);
app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: true }));
app.use(method("_method"));
app.use(expressSession({ secret: "ROMAN", resave: true, saveUninitialized: true }));
app.use(morgan("dev"));

app.use(require("../src/routes/index.routes"));
app.use(require("../src/routes/notes.routes"));
app.use(require("../src/routes/user.routes"));

app.listen(app.get("port"), () => {
    console.log("port :>> ", `http://localhost:${app.get("port")}`);
});
