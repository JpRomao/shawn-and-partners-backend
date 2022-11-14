import "dotenv/config";

import { api } from "../../githubApi";

describe("Get Github users", () => {
  it("should return an array of users", async () => {
    const response = await api.get("/users?since=0");

    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
  });
});

describe("Get Github user details", () => {
  it("should return a user object", async () => {
    const response = await api.get("/users/jpromao");

    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Object);
  });
});
