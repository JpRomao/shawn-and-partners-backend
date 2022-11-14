import { Router } from "express";
import RepoController from "./controllers/RepoController";
import UserController from "./controllers/UserController";

const router = Router();

router.get("/users", async (request, response) => {
  try {
    const since = Number(request.query.since);
    const skip = 30;

    if (!since || since < 0) {
      return response.status(400).json({
        error: "Missing since parameter. use '?since={number}' to set it.",
      });
    }

    const users = await UserController.getUsers(since, skip);

    return response.status(200).json(users);
  } catch (error) {
    const { message, stack } = error as Error;

    console.error("Error -> ", stack);

    return response.status(400).json({ message });
  }
});

router.get("/users/:username/details", async (request, response) => {
  try {
    const { username } = request.params;

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
          "Missing username parameter. use '/users/{username}/repos' to set it.",
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
