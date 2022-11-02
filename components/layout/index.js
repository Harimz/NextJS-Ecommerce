import { Box } from "@chakra-ui/react";
import React from "react";
import Nav from "../nav";

const Layout = ({ children }) => {
  return (
    <>
      <Box bgColor="primary.100" p="1rem">
        <Nav />
      </Box>

      {children}
    </>
  );
};

export default Layout;
