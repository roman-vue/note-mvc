const express = require("express");
const router = express.Router();

router.get("/signIn", (req, res) => {
    res.render("users/signIn");
});

router.get("/signUp", (req, res) => {
    res.render("users/signUp");
});
module.exports = router;
