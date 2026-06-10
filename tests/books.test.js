const request = require("supertest");

const app = require("../server");

describe("Book Catalog API", () => {

    test("GET /books debe devolver la lista de libros", async () => {

        const response = await request(app)
            .get("/books");

        expect(response.statusCode).toBe(200);

        expect(Array.isArray(response.body)).toBe(true);

    });

    test("POST /books debe agregar un libro", async () => {

    const response = await request(app)
        .post("/books")
        .send({
            title: "The Midnight Train",
            author: "Matt Haig"
        });

    expect(response.statusCode).toBe(201);

    expect(response.body.title)
        .toBe("The Midnight Train");

});

test("POST /books sin datos debe devolver error 400", async () => {

    const response = await request(app)
        .post("/books")
        .send({});

    expect(response.statusCode).toBe(400);

});

});