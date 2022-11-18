import React from "react";
import { Box, Button, Divider, Flex, Input, Text } from "@chakra-ui/react";
import Link from "next/link";

const AuthForm = ({ children, type }) => {
  return (
    <Box
      bgColor="gray.100"
      maxW="30rem"
      w="90%"
      m="5rem auto"
      p={["0.5rem", "2rem"]}
      borderRadius="10px"
      boxShadow="1px 2px 3px rgba(0,0,0,0.1)"
    >
      <Text textAlign="center" fontSize="1.5rem" fontWeight="700">
        {type ? "Sign up now" : "Login now"}
      </Text>

      <Divider mt="1rem" />

      {children}

      {type ? (
        <Flex mt="1rem" gap="0.5rem">
          <Text>Already have an account?</Text>
          <Link href="/signin">
            <Text cursor="pointer" fontWeight="bold">
              Login here
            </Text>
          </Link>
        </Flex>
      ) : (
        <Flex mt="1rem" gap="0.5rem">
          <Text>Not signed up yet?</Text>
          <Link href="/signup">
            <Text cursor="pointer" fontWeight="bold">
              Signup here
            </Text>
          </Link>
        </Flex>
      )}
    </Box>
  );
};

export default AuthForm;
