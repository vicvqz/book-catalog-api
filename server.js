const express = require("express");

const app = express();

app.use(express.json());

const booksRouter = require("./api/books");

app.get("/", (req, res) => {
    res.json({
        message: "Catalogo de libros API funcionando"
    });
});

app.use("/books", booksRouter);

if (require.main === module) {

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en puerto ${PORT}`);
    });

}

module.exports = app;