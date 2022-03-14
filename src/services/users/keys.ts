import { QueryKey } from "react-query";

export const createGetGitDataKey = (username: string): QueryKey => [
  "getGithubData",
  username
];
