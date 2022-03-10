import React from "react";

import api from "../services/api";
import { Flex, Input, Grid, Image, Text, Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    async function getUser() {
      try {
        const response = await api.get("/users/thiagoow");
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    //Executa a função acima:
    getUser();
  }, []);

  return (
    <Flex direction="column" alignItems="center" paddingTop="2rem">
      <Input width="14rem" size="sm" placeholder="Digite seu nome de usuário" />

      <Flex direction="row" alignItems="center">
        <Image
          src={(user as any)?.avatar_url}
          alt="avatar"
          width="6rem"
          height="6rem"
          marginTop="2rem"
          borderRadius="full"
        />

        <Flex direction="column" marginLeft="1rem" alignItems="center">
          <Text fontWeight="bold" fontSize="1.5rem" marginTop="0.8rem">
            <a href={(user as any).url} target="_blank">
              {(user as any)?.name}
            </a>
          </Text>

          <Button
            variant="link"
            _focus={{ boxShadow: "none" }}
            leftIcon={<FaGithub />}
            fontSize="0.8rem"
            alignSelf="start"
            marginTop="0.6rem"
            marginLeft="0.2rem"
            color="#ccc"
          >
            <a href={(user as any).html_url} target="_blank">
              {(user as any)?.login}
            </a>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
