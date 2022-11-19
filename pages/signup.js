import React, { useState } from "react";
import { Box, Button, Divider, Flex, Input, Text } from "@chakra-ui/react";
import AuthForm from "../components/auth-form";
import { useCreateUserMutation } from "../redux/services/authApi";

const SignUp = () => {
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [createUser, result] = useCreateUserMutation();

  const registerHandler = async (e) => {
    e.preventDefault();

    try {
      await createUser(registerInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthForm type={1} authHandler={registerHandler}>
      <Flex flexDir="column" gap="1rem" mt="1rem">
        <Box>
          <Text>Full Name</Text>
          <Input
            placeholder="John Smith"
            onChange={({ target }) =>
              setRegisterInfo((state) => ({ ...state, name: target.value }))
            }
          />
        </Box>

        <Box>
          <Text>Email</Text>
          <Input
            placeholder="johnsmith@example.com"
            onChange={({ target }) =>
              setRegisterInfo((state) => ({ ...state, email: target.value }))
            }
          />
        </Box>

        <Box>
          <Text>Password</Text>
          <Input
            placeholder="******"
            type="password"
            onChange={({ target }) =>
              setRegisterInfo((state) => ({ ...state, password: target.value }))
            }
          />
        </Box>

        <Box>
          <Text>Confirm Password</Text>
          <Input placeholder="******" type="password" />
        </Box>
      </Flex>

      <Button variant="primary" w="100%" mt="2rem" type="submit">
        Sign Up
      </Button>
    </AuthForm>
  );
};

export default SignUp;
