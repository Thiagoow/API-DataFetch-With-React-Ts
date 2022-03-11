import React from "react";

import api from "../services/api";
import { Flex, Input, Image, Text, Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    async function getGithubData() {
      try {
        const response = await api.get("/users/Thiagoow");
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getGithubData();
  });

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

        <Flex direction="column" marginLeft="1.4rem" alignItems="center">
          <Text fontWeight="bold" fontSize="1.5rem" marginTop="1.1rem">
            <a href={(user as any).url} target="_blank">
              {(user as any)?.name}
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
            {(user as any)?.bio}
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
            <a href={(user as any).html_url} target="_blank">
              {(user as any)?.login}
            </a>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
