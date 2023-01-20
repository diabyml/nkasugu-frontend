import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  HStack,
  IconButton,
  Text,
  Flex,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import { BiCategoryAlt } from "react-icons/bi";
import {
  useGetCategoriesLazyQuery,
  useGetCategoriesQuery,
} from "../../generated/graphql";
import { Router, useRouter } from "next/router";

interface Props {}

const categories = [
  {
    id: "0",
    name: "Electronics",
  },
  {
    id: "1",
    name: "Food",
  },
  {
    id: "2",
    name: "Car",
  },
  {
    id: "3",
    name: "Desktop",
  },
  {
    id: "4",
    name: "Woman",
  },
  {
    id: "5",
    name: "Children Food",
  },
  {
    id: "0",
    name: "Electronics",
  },
  {
    id: "1",
    name: "Food",
  },
  {
    id: "2",
    name: "Car",
  },
  {
    id: "3",
    name: "Desktop",
  },
  {
    id: "4",
    name: "Woman",
  },
  {
    id: "5",
    name: "Children Food",
  },
  {
    id: "0",
    name: "Electronics",
  },
  {
    id: "1",
    name: "Food",
  },
  {
    id: "2",
    name: "Car",
  },
  {
    id: "3",
    name: "Desktop",
  },
  {
    id: "4",
    name: "Woman",
  },
  {
    id: "5",
    name: "Children Food",
  },
  {
    id: "0",
    name: "Electronics",
  },
  {
    id: "1",
    name: "Food",
  },
  {
    id: "2",
    name: "Car",
  },
  {
    id: "3",
    name: "Desktop",
  },
  {
    id: "4",
    name: "Woman",
  },
  {
    id: "5",
    name: "Children Food",
  },
  {
    id: "0",
    name: "Electronics",
  },
  {
    id: "1",
    name: "Food",
  },
  {
    id: "2",
    name: "Car",
  },
  {
    id: "3",
    name: "Desktop",
  },
  {
    id: "4",
    name: "Woman",
  },
  {
    id: "5",
    name: "Children Food",
  },
  {
    id: "0",
    name: "Electronics",
  },
  {
    id: "1",
    name: "Food",
  },
  {
    id: "2",
    name: "Car",
  },
  {
    id: "3",
    name: "Desktop",
  },
  {
    id: "4",
    name: "Woman",
  },
  {
    id: "5",
    name: "Children Food",
  },
  {
    id: "0",
    name: "Electronics",
  },
  {
    id: "1",
    name: "Food",
  },
  {
    id: "2",
    name: "Car",
  },
  {
    id: "3",
    name: "Desktop",
  },
  {
    id: "4",
    name: "Woman",
  },
  {
    id: "5",
    name: "Children Food",
  },
  {
    id: "0",
    name: "Electronics",
  },
  {
    id: "1",
    name: "Food",
  },
  {
    id: "2",
    name: "Car",
  },
  {
    id: "3",
    name: "Desktop",
  },
  {
    id: "4",
    name: "Woman",
  },
  {
    id: "5",
    name: "Children Food",
  },
];

const Skeletons = () => (
  <Stack p="1">
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
  </Stack>
);

const CategoriesBrowser: React.FC<Props> = () => {
  const router = useRouter();
  const [mouseEntered, setMouseEntered] = useState(false);
  const [subCategoryId, setSubCategoryId] = useState("");
  const handleMouseState = () => setMouseEntered((prev) => !prev);

  // skeleton array

  // graphql

  const {
    data: categoriesData,
    loading: categoriesLoading,
    error,
  } = useGetCategoriesQuery({ variables: { parentId: null } });
  const [
    getSubCategories,
    { data: subCategoriesData, loading: subCategoriesLoading },
  ] = useGetCategoriesLazyQuery({ variables: { parentId: subCategoryId } });

  // anytime subCategoryId changes fetch new subcategories item
  useEffect(() => {
    if (subCategoryId) {
      getSubCategories({ variables: { parentId: subCategoryId } });
    }
  }, [getSubCategories, subCategoryId]);

  if (categoriesLoading) {
    return <Box> loading... </Box>;
  }

  return (
    <Box
      onMouseEnter={handleMouseState}
      onMouseLeave={handleMouseState}
      pos="relative"
    >
      <IconButton aria-label="Open Categories" icon={<BiCategoryAlt />} />

      {/* main categories */}
      {mouseEntered ? (
        <Flex
          pos="absolute"
          minW={"400px"}
          zIndex={"popover"}
          top="100%"
          // bg="red"
          // flexDirection="row"
        >
          <Card
            rounded={"none"}
            bg="white"
            minH="70vh"
            maxH="70vh"
            minWidth="200px"
            overflowY="scroll"
          >
            <Box>
              {categoriesLoading ? (
                <>
                  {" "}
                  <Skeletons />{" "}
                </>
              ) : (
                categoriesData?.categories.map(({ id, name }) => (
                  <Text
                    key={id}
                    cursor="pointer"
                    fontSize={"xs"}
                    color="main"
                    p="2"
                    bg={subCategoryId === id ? "beige.100" : null}
                    _hover={{ backgroundColor: "beige.100" }}
                    onMouseEnter={() => {
                      setSubCategoryId(id);
                    }}
                    //   onMouseLeave={() => setSubCategoryId("")}
                  >
                    {name}
                  </Text>
                ))
              )}
              {/* <Text
                cursor="pointer"
                fontSize={"xs"}
                color="main"
                p="2"
                // bg={subCategoryId === id ? "beige.100" : null}
                _hover={{ backgroundColor: "beige.100" }}
                onMouseEnter={() => {
                  setSubCategoryId("");
                }}
                onClick={ () => router.push('/categorie/divers') }
              >
                Divers
              </Text> */}
            </Box>
          </Card>

          {/* subCategories1 */}
          <Box hidden={!!!subCategoryId}>
            <Card
              rounded={"none"}
              bg="white"
              minH="70vh"
              maxH="70vh"
              minWidth="200px"
              overflowY="scroll"
            >
              <Box>
                {subCategoriesLoading ? (
                  <>
                    <Skeletons />
                  </>
                ) : (
                  <>
                    {subCategoriesData?.categories.map(({ id, name }) => (
                      <Text
                        key={id}
                        cursor="pointer"
                        fontSize={"xs"}
                        color="main"
                        p="2"
                        _hover={{ backgroundColor: "beige.100" }}
                        onClick={() => {
                          // router.push(
                          //   {
                          //     pathname: `/categorie/${name}`,
                          //     query: { id: id },
                          //   },
                          //   `/categorie/${name}`
                          // )
                          router
                            .push(`/categorie/${name}?id=${id}`)
                            .then(() => router.reload);
                          handleMouseState();
                        }}
                      >
                        {name}
                      </Text>
                    ))}
                  </>
                )}
              </Box>
            </Card>
          </Box>
        </Flex>
      ) : null}
    </Box>
  );
};

export default CategoriesBrowser;
