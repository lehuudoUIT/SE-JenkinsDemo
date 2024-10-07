const request = require("supertest");
const app = require("../src/app");
const sum = require("../src/sum");

test("sum of 1 + 2 should equal 3", () => {
  expect(sum(1, 2)).toBe(4);
});

test("POST /sum should return the correct sum", async () => {
  const response = await request(app).post("/sum").send({ a: 1, b: 2 });
  expect(response.body.result).toBe(3);
});
