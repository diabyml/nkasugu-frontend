import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, CloseButton, Flex, Slide, Stack } from "@chakra-ui/react";
import React from "react";
import CategoryItem from "./CategoryItem";
import { Router, useRouter } from "next/router";

interface Props {
  categories: any;
  setSelectedCategoryId: (id: string) => void;
  onCloseDrawer: any;
}

const MobileSubCategories: React.FC<Props> = ({
  categories,
  setSelectedCategoryId,
  onCloseDrawer,
}) => {
  const router = useRouter();
  return (
    <Box minH={"100vh"}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        p={4}
        bg="beige.100"
      >
        <Flex
          alignItems="center"
          cursor="pointer"
          onClick={() => {
            // set id to "" to hide Menu
            setSelectedCategoryId("");
          }}
        >
          <ChevronLeftIcon boxSize="6" mr="2" />
          <Box as="span" color="main" fontSize="md">
            Menu
          </Box>
        </Flex>
        <Box>
          <CloseButton
            onClick={() => {
              onCloseDrawer();
              setSelectedCategoryId("");
            }}
          />
        </Box>
      </Flex>
      <Box as="nav" bg="#FAFAFA" px={4}>
        <Stack spacing="0">
          {categories.map(({ id, name }) => (
            <Box
              key={id}
              onClick={() => {
                // router.push(`/categorie/${name}?id=${id}`);
                router
                  .push(`/categorie/${name}?id=${id}`)
                  .then(() => router.reload);
                // router.push(
                //   {
                //     pathname: `/categorie/${name}`,
                //     query: { id: id },
                //   },
                //   `/categorie/${name}`
                // );
                setSelectedCategoryId("");
                onCloseDrawer();
              }}
            >
              <CategoryItem showIcon={false}>{name}</CategoryItem>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default MobileSubCategories;
