import { api } from "../githubApi";

class RepoController {
  public async getRepos(username: string) {
    const { data: repos } = await api.get(`/users/${username}/repos`);

    return repos;
  }
}

export default new RepoController();
