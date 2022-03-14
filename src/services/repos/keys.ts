import { QueryKey } from "react-query";

export const createGetGitReposKey = (username: string): QueryKey => [
  "getGithubRepos",
  username
];
