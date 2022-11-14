import { Router } from "express";

import RepoController from "./controllers/RepoController";
import UserController from "./controllers/UserController";

const router = Router();

router.get("/", (request, response) => {
  return response.status(200).json({
    message:
      "Hello. You can view the documentation of this api at: https://github.com/JpRomao/shawn-and-partners/tree/main/backend",
  });
});

router.get("/users", async (request, response) => {
  try {
    const since =
      Number(request.query.since) < 0 ? 0 : Number(request.query.since) || 0;
    const skip = 30;

    if (since || since === 0) {
      const users = await UserController.getUsers(since);

      return response.status(200).json({
        users,
        nextPage: since + skip,
      });
    }

    return response.status(400).json({
      message: "Since is required. Use '/users?since={number}' to get users.",
    });
  } catch (error) {
    const { message, stack } = error as Error;

    console.error("Error -> ", stack);

    return response.status(400).json({ message });
  }
});

router.get("/users/:username/details", async (request, response) => {
  try {
    const { username } = request.params;

    if (!username) {
      return response
        .status(400)
        .json({ message: "Username parameter is required" });
    }

    const user = await UserController.getUserDetails(username);

    return response.status(200).json({ user });
  } catch (error) {
    const { message, stack } = error as Error;

    console.error("Error -> ", stack);

    return response.status(400).json({ message });
  }
});

router.get("/users/:username/repos", async (request, response) => {
  try {
    const { username } = request.params;

    if (!username) {
      return response.status(400).json({
        error:
          "Missing username parameter. Use '/users/{username}/repos' to set it.",
      });
    }

    const user = await RepoController.getRepos(username);

    return response.status(200).json({ user });
  } catch (error) {
    const { message } = error as Error;

    return response.status(400).json({ message });
  }
});

export { router };
