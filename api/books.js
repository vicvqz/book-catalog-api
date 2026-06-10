const express = require("express");

const router = express.Router();

const books = require("../data/booksdata");

router.get("/", (req, res) => {
    res.json(books);
});

router.post("/", (req, res) => {

    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({
            error: "title y author son obligatorios"
        });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author
    };

    books.push(newBook);

    res.status(201).json(newBook);

});

module.exports = router;