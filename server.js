const express = require("express");

const app = express();

app.use(express.json());

const books = [
    {
        id: 1,
        title: "The Nightingale",
        author: "Kristin Hannah"
    },
    {
        id: 2,
        title: "The Most Fun We Ever Had",
        author: "Claire Lombardo"
    }
];

app.get("/books", (req, res) => {
    res.json(books);
});

if (require.main === module) {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en puerto ${PORT}`);
    });
}

module.exports = app;