import { useQuery, UseQueryOptions } from "react-query";

import api from "../api";
import { createGetGitReposKey } from "./keys";
import { Repos } from "./types";

//Hook que faz a requisição get:
export const GetGithubRepos = (
  username: string,
  options?: UseQueryOptions<Repos>
) => {
  return useQuery(
    createGetGitReposKey(username),
    () =>
      //Faz uma requisição GET com as response desestruturada:
      api
        //Filtra os 6 últimos repos criados, usando a própria url da API do GitHub:
        .get<Repos>(`/users/${username}/repos?sort=created&per_page=6`)
        .then((response) => response.data),
    options
  );
};
