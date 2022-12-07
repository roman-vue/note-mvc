const express = require("express");
const Note = require("../database/models/Note");
const router = express.Router();
const NoteModel = require("../database/models/Note");
router.post("/save-notes", async (req, res) => {
    const { title, description } = req.body;
    const errors = [];
    if (!title) {
        errors.push({ text: "insert a title" });
    }
    if (!description) {
        errors.push({ text: "insert a description" });
    }

    if (errors.length > 0) {
        res.render("notes/form-notes", { errors: errors, title, description });
    } else {
        const newNote = new Note({ title: title, description: description });
        const save = await newNote.save();
        console.log("save :>> ", save);
        res.json({ data: save });
    }
});

router.get("/notes/add", (req, res) => {
    res.render("notes/form-notes");
});
module.exports = router;
