import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
  Link,
  Slide,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  useGetCategoriesLazyQuery,
  useGetCategoriesQuery,
  useMeQuery,
} from "../../generated/graphql";
import DrawerCategories from "../categories/DrawerCategories";
import MobileSubCategories from "../categories/MobileSubCategories";
import MobileLink from "./MobileLink";

import NextLink from "next/link";

const categories = [
  {
    id: "0",
    name: "Electronics",
    subCategories: [{ id: "000", name: "Testla Phone" }],
  },
  {
    id: "1",
    name: "Food",
    subCategories: [{ id: "011", name: "Humberger" }],
  },
  {
    id: "2",
    name: "Car",
    subCategories: [{ id: "022", name: "Royll Royce" }],
  },
  {
    id: "3",
    name: "Desktop",
    subCategories: [{ id: "033", name: "Lenovo" }],
  },
  {
    id: "4",
    name: "Woman",
    subCategories: [{ id: "044", name: "Woman bogolan" }],
  },
];

interface Props {
  isOpen: boolean;
  placement?: "left" | "right";
  onClose: any;
  finalFocusRef: any;
}

const MobileNavDrawer: React.FC<Props> = ({
  isOpen,
  placement,
  onClose,
  finalFocusRef,
}) => {
  const router = useRouter();
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const handleSelectedCategoyIdChange = (id: string) =>
    setSelectedCategoryId(id);

  // graphql
  const { data: meData } = useMeQuery();
  const {
    data: categoriesData,
    loading: categoriesLoading,
    error: categoriesError,
  } = useGetCategoriesQuery({ variables: { parentId: null } });
  const [
    getSubCategories,
    { data: subCategoriesData, loading: subCategoriesLoading },
  ] = useGetCategoriesLazyQuery({
    variables: { parentId: selectedCategoryId },
  });

  const error = categoriesError;

  // anytime subCategoryId changes fetch new subcategories item
  useEffect(() => {
    if (selectedCategoryId) {
      getSubCategories({ variables: { parentId: selectedCategoryId } });
    }
  }, [getSubCategories, selectedCategoryId]);

  const getCategories = () => {
    const res = categories.find(({ id }) => id === selectedCategoryId);
    if (res) {
      return res.subCategories;
    }

    return [];
  };

  if (categoriesLoading) {
    return <Box>loading...</Box>;
  }

  if (error) {
    return <Box>Une erreur s'est produite!</Box>;
  }

  return (
    <Drawer
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setSelectedCategoryId("");
      }}
      finalFocusRef={finalFocusRef}
      placement={placement || "left"}
      size={"xs"}
    >
      <DrawerOverlay />
      <DrawerContent>
        {!selectedCategoryId ? (
          <>
            <DrawerCloseButton />
            <Stack p={4}>
              {meData?.me ? (
                <NextLink href="/vendor/add-product" passHref>
                  <Link color="main" _hover={{ textDecoration: "none" }}>
                    Vendre
                  </Link>
                </NextLink>
              ) : (
                // <Logo variant="small"/>
                <>
                  <NextLink href="/join?state=login" passHref>
                    <Link color="brand" _hover={{ textDecoration: "none" }}>
                      Se connecter
                    </Link>
                  </NextLink>
                  <NextLink href="/join?state=register" passHref>
                    <Link color="brand" _hover={{ textDecoration: "none" }}>
                      S'inscrire
                    </Link>
                  </NextLink>
                </>
              )}
            </Stack>
            <Divider />
            <DrawerBody px={"0"}>
              <DrawerCategories
                categories={categoriesData?.categories}
                handler={handleSelectedCategoyIdChange}
              />
              <Box>
                {/* <MobileLink href="/about">À propos</MobileLink> */}
                {/* <MobileLink href="/news">Actualités</MobileLink> */}
              </Box>
            </DrawerBody>
          </>
        ) : null}

        <Slide
          direction="bottom"
          in={selectedCategoryId && true}
          style={{ zIndex: 10 }}
        >
          <MobileSubCategories
            categories={subCategoriesData?.categories || []}
            setSelectedCategoryId={setSelectedCategoryId}
            onCloseDrawer={onClose}
          />
        </Slide>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavDrawer;
