import {
  Flex,
  Input,
  Image,
  Text,
  Button,
  Link,
  Badge
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
//Hooks com React Query:
import { GetGithubRepos } from "../services/repos";
import { getGithubData } from "../services/users";

const username = "Thiagoow";

export default function Home() {
  //Usando o hook de GET dos dados pro username com @xyz:
  const { data: user } = getGithubData(username);

  //Usando o hook de GET dos repos:
  const { data: repos } = GetGithubRepos(username);

  return (
    <Flex direction="column" alignItems="center" paddingTop="2rem">
      <Input width="14rem" size="sm" placeholder="Digite seu nome de usuário" />
      <Flex direction="row" alignItems="center">
        <Image
          src={user?.avatar_url}
          alt="avatar"
          width="6rem"
          height="6rem"
          marginTop="2rem"
          borderRadius="full"
        />

        <Flex direction="column" marginLeft="1.4rem" alignItems="center">
          <Text fontWeight="bold" fontSize="1.5rem" marginTop="1.1rem">
            <a href={user?.url} target="_blank">
              {user?.name}
            </a>
          </Text>

          <Text
            fontSize="0.8rem"
            alignSelf="start"
            fontWeight="normal"
            marginTop="0.4rem"
            marginLeft="0.2rem"
            //Clip txt:
            overflow="hidden"
            textOverflow="ellipsis"
            width="200px"
            whiteSpace="nowrap"
          >
            {user?.bio}
          </Text>

          <Button
            variant="link"
            _focus={{ boxShadow: "none" }}
            leftIcon={<FaGithub />}
            fontSize="0.8rem"
            alignSelf="start"
            marginTop="0.5rem"
            marginLeft="0.2rem"
            fontWeight="semibold"
          >
            <a href={user?.html_url} target="_blank">
              {user?.login}
            </a>
          </Button>
        </Flex>
      </Flex>

      <Flex direction="column" marginBottom="3rem">
        <Text fontWeight="bold" fontSize="1rem" marginTop="3rem" text->
          <a href={repos?.url} target="_blank">
            Repositórios
          </a>
        </Text>

        {/*  @ts-ignore: Map is a method, not a property from type Repos */}
        {repos?.map((repo: any) => (
          <Link
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="25rem"
            height="3rem"
            background="#000"
            _focus={{ boxShadow: "none" }}
            _hover={{ textDecoration: "none" }}
            marginTop="1.5rem"
            paddingLeft="1rem"
            paddingRight="1rem"
            href={repo.html_url}
            target="_blank"
          >
            <Text>{repo.name}</Text>
            <Badge>{repo.language}</Badge>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
