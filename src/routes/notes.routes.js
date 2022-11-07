const express = require("express");
const router = express.Router();
router.post("/save-notes", (req, res) => {
    const { title, description } = req.body;
    const errors = [];
    if (!title) {
        errors.push({ text: "insert a title" });
    }
    if (!description) {
        errors.push({ text: "insert a description" });
    }

    if (errors.length > 0) {
        res.render("notes/form-notes", { errors: errors, title: description });
    }
});

router.get("/notes/add", (req, res) => {
    res.render("notes/form-notes");
});
module.exports = router;
