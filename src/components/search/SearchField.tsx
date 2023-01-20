import { ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  InputElementProps,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { SearchQueryContext } from "../../providers/SearchQueryProvider";
import { useRouter } from "next/router";

type Props = InputElementProps & {
  variant?: "md" | "sm";
};

const SearchField: React.FC<Props> = ({ variant, ...props }) => {
  const { searchQuery, handleSearchQueryChange } =
    useContext(SearchQueryContext);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?query=${searchQuery}`);
    // handleSearchQueryChange("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <InputGroup size={variant === "sm" ? "sm" : "md"}>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Rechercher..."
            border={"1px"}
            borderColor="main"
            rounded={"full"}
            _focusVisible={{ boxShadow: "none" }}
            _hover={{ borderColor: "main" }}
            value={searchQuery}
            onChange={(e) => {
              handleSearchQueryChange(e.currentTarget.value);
            }}
            {...props}
            pr="10"
            // bg="teal"
          />
          <InputRightElement
            mr="1"
            children={
              <IconButton
                type="submit"
                size={"xs"}
                colorScheme="green"
                aria-label="Search database"
                icon={<ArrowForwardIcon />}
                rounded="full"
              />
            }
          />
        </InputGroup>
      </Stack>
    </form>
  );
};

export default SearchField;
