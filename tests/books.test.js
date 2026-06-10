const request = require("supertest");

const app = require("../server");

describe("Book Catalog API", () => {

    test("GET /books debe devolver la lista de libros", async () => {

        const response = await request(app)
            .get("/books");

        expect(response.statusCode).toBe(200);

        expect(Array.isArray(response.body)).toBe(true);

    });

});