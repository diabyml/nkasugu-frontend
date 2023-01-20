import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Stack, StackDivider, Link, HStack, Flex } from "@chakra-ui/react";
import React from "react";
import CategoryItem from "./CategoryItem";

interface Props {
  categories: any;
  handler: (id: string) => void;
}

const DrawerCategories: React.FC<Props> = ({ categories, handler }) => {
  return (
    <Box as="nav" bg="#FAFAFA" px={4}>
      <Stack spacing="0">
        {categories.map(({ id, name }) => (
          <Box key={id} onClick={() => handler(id)}>
            <CategoryItem showIcon>{name}</CategoryItem>
          </Box>
        ))}
      </Stack>
      {/* <Box> <CategoryItem>Toutes catégories</CategoryItem> </Box> */}
    </Box>
  );
};

export default DrawerCategories;
