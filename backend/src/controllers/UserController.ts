import { api } from "../githubApi";

class UserController {
  public async getUsers(since: number, skip: number) {
    const { data: users } = await api.get(`/users?since=${since + skip}`);

    return users;
  }

  public async getUserDetails(username: string) {
    const { data: user } = await api.get(`/users/${username}`);

    return user;
  }
}

export default new UserController();
