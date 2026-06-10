const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Servir archivos estáticos de la carpeta public
app.use(express.static(path.join(__dirname, "public")));

const booksRouter = require("./api/books");

// Página principal
app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );
});

// API de libros
app.use("/books", booksRouter);

if (require.main === module) {

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en puerto ${PORT}`);
    });

}

module.exports = app;