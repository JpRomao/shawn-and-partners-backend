import "dotenv/config";

import { api } from "../../githubApi";

describe("Get Github user repos", () => {
  it("should return an array of repos", async () => {
    const response = await api.get("/users/jpromao/repos");

    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
  });
});
