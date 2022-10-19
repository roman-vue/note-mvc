const express = require("express");
const router = express.Router();
router.get("/notes/new-notes", (req, res) => {
    res.render("notes/form-notes");
});

router.post("/save-notes", (req, res) => {
    const { title, description } = req.body;
    res.send("OK");
});
module.exports = router;
