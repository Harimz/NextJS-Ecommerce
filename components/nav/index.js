import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { GiClover } from "react-icons/gi";

const Nav = () => {
  return (
    <Container color="white" maxW="100rem" w="95%">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex gap="0.5rem" alignItems="center">
          <Icon as={GiClover} w={6} h={6} />

          <Text fontWeight="600" size="md">
            Lucky By Nature
          </Text>
        </Flex>

        <Flex alignItems="center">
          <Input width="10rem" />

          <Button size="sm" bgColor="#FCA311">
            Sign Up
          </Button>

          <Button size="sm" bgColor="#FCA311">
            Register
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Nav;
