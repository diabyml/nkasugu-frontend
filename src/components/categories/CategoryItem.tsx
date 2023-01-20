import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: any;
  showIcon?: boolean;
}

const CategoryItem: React.FC<Props> = ({ children, showIcon }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      w="full"
      h="full"
      py={1}
      cursor={"pointer"}
    >
      <Box as="span" color={'main'}>{children}</Box>
      {showIcon ? (<ChevronDownIcon boxSize={4} color="main" ml={4} />) : null}
    </Flex>
  );
};

export default CategoryItem;
