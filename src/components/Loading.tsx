import { Flex } from "@chakra-ui/react";
import React from "react";
import { CircularProgress } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex mt="6" alignItems="center" justify="center">
      <CircularProgress color="main" isIndeterminate />
    </Flex>
  );
};

export default Loading;
