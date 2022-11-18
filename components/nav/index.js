import React, { useState } from "react";
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
import SearchInput from "./search-input";
import Link from "next/link";
import MobileNav from "./mobile-nav";

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchHandler = () => {
    console.log(searchQuery);
  };

  return (
    <Container color="white" maxW="100rem" w="95%">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex gap="0.5rem" alignItems="center">
          <Icon as={GiClover} w={6} h={6} />

          <Text fontWeight="600" size="md">
            Lucky By Nature
          </Text>
        </Flex>

        <Flex alignItems="center" display={["none", "flex"]}>
          <SearchInput
            onSearch={searchHandler}
            setSearchQuery={setSearchQuery}
          />

          <Flex gap="1rem" ml="10rem">
            <Link href="/signup" passHref>
              <Button size="sm" variant="primary">
                Sign Up
              </Button>
            </Link>

            <Link href="/signin" passHref>
              <Button size="sm" variant="primary">
                Login
              </Button>
            </Link>
          </Flex>
        </Flex>

        <MobileNav onSearch={searchHandler} setSearchQuery={setSearchQuery} />
      </Flex>
    </Container>
  );
};

export default Nav;
