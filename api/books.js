const express = require("express");

const router = express.Router();

const books = require("../data/booksdata");

router.get("/", (req, res) => {
    res.json(books);
});

module.exports = router;