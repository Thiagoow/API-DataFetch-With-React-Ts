import { useQuery, UseQueryOptions } from "react-query";

import api from "../api";
import { createGetGitDataKey } from "./keys";
import { User } from "./types";

//Hook que faz a requisição get:
export const getGithubData = (
  //Recebe um argumento usuário:
  username: string,
  //E retorna o objeto do tipo User:
  options?: UseQueryOptions<User>
) => {
  return useQuery(
    //Faz uma requisição get pra cada username 😎:
    createGetGitDataKey(username),
    //Requisição GET que retorna uma resposta desestruturada(.data):
    () => api.get<User>(`/users/${username}`).then((response) => response.data),
    options
  );
};
