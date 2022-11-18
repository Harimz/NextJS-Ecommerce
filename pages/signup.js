import React, { useState } from "react";
import { Box, Button, Divider, Flex, Input, Text } from "@chakra-ui/react";
import AuthForm from "../components/auth-form";

const SignUp = () => {
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <AuthForm type={1}>
      <Flex flexDir="column" gap="1rem" mt="1rem">
        <Box>
          <Text>Full Name</Text>
          <Input placeholder="John Smith" />
        </Box>

        <Box>
          <Text>Email</Text>
          <Input placeholder="johnsmith@example.com" />
        </Box>

        <Box>
          <Text>Password</Text>
          <Input placeholder="******" type="password" />
        </Box>

        <Box>
          <Text>Confirm Password</Text>
          <Input placeholder="******" type="password" />
        </Box>
      </Flex>

      <Button variant="primary" w="100%" mt="2rem">
        Sign Up
      </Button>
    </AuthForm>
  );
};

export default SignUp;
