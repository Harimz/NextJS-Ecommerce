import React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";

const MobileNav = ({ onSearch, setSearchQuery }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display={["block", "none"]}>
      <IconButton
        icon={<HiMenu size={28} />}
        variant="primary"
        onClick={() => onOpen()}
      />

      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton bgColor="secondary.100" color="white" />
          <DrawerBody mt="5rem">
            <Input
              placeholder="Search product"
              onChange={({ target }) => setSearchQuery(target.value)}
            />

            <Button variant="primary" w="100%" mt="1rem" onClick={onSearch}>
              Search
            </Button>

            <Divider mt="2rem" />

            <Flex flexDir="column" gap="1rem" mt="1rem">
              <Link href="/signin" passHref>
                <Button variant="ghost" onClick={() => onClose()}>
                  Sign Up
                </Button>
              </Link>

              <Link href="/signup" passHref>
                <Button variant="primary" onClick={() => onClose()}>
                  Register
                </Button>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileNav;
