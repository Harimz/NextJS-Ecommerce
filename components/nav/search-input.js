import React, { useState } from "react";
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const SearchInput = ({ onSearch, setSearchQuery }) => {
  const [input, setInput] = useState("");

  return (
    <Flex gap="0.5rem">
      <Select
        variant="outline"
        bg="secondary.100"
        cursor="pointer"
        border="none"
        w="10rem"
      >
        <option value="option1">All Categories</option>
        <option value="option2">Option 2</option>
      </Select>

      <Input
        w="25rem"
        pr="4.5rem"
        placeholder="Enter password"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <IconButton
        variant="primary"
        _hover={{ transform: "scale(1.05)", opacity: 0.8 }}
        icon={<FaSearch />}
        onClick={onSearch}
      />
    </Flex>
  );
};

export default SearchInput;
