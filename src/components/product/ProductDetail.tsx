import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import {
  useGetCategoryQuery,
  useGetProductQuery,
  useMeQuery,
  useUserLocationQuery,
} from "../../generated/graphql";
import Error from "../Error";
import Loading from "../Loading";
import SimilarProducts from "./SimilarProducts";
import ProductActions from "./ProductActions";
import { sortImages } from "../../utils/sortImages";
import { getImageFromVariant } from "../../utils/getImageFromVariant";
// import Button from "../button/Button";

interface Props {
  slug?: string;
}

const ProductDetail: React.FC<Props> = ({ slug }) => {
  const [countryCode, setCountryCode] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const { data: meData, loading: meLoading, error: meError } = useMeQuery();
  const {
    data,
    loading: productLoading,
    error: productError,
  } = useGetProductQuery({ variables: { slug } });
  const [currentImage, setCurrentImage] = useState("");
  const subCategory = slug.split("/")[1];

  const {
    data: userLocationData,
    error: userLocationError,
    loading: userLocationLoading,
  } = useUserLocationQuery({ variables: { countryCode }, skip: !countryCode });

  const {
    data: similarCategoryData,
    loading: similarCategroyLoading,
    error: similarProductsError,
  } = useGetCategoryQuery({ variables: { categoryName: subCategory } });

  // loading state
  const loading =
    productLoading &&
    similarCategroyLoading &&
    userLocationLoading &&
    meLoading;
  const error =
    userLocationError && productError && similarProductsError && meError;

  React.useEffect(() => {
    const countryCode = JSON.parse(localStorage.getItem("countryCode"));

    setCountryCode(countryCode || "ML");
  }, []);

  React.useEffect(() => {
    if (data) {
      setCurrentImage(
        getImageFromVariant(data?.product.images, "primary")?.secureUrl
      );
      // console.log("images sorted:", sortImages(data?.product.images));
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  // return <Box> {data?.product.name} </Box>;

  return (
    <Box py="2">
      <Container maxW={"container.sm"} bg="white" borderRadius={"lg"}>
        <Flex direction={{ base: "column", md: "row" }} pt="2" gap="6">
          <Box flex="1">
            {/* {data?.product.images.map(({ secureUrl, id }) => (
              <Image
                width={"100%"}
                height={"300px"}
                alt="Product image"
                src={secureUrl}
                objectFit="contain"
                hidden={currentImage !== secureUrl}
                key={id}
              />
            ))} */}

            {/* first image */}
            <Image
              width={"100%"}
              height={"300px"}
              alt="Product image"
              src={
                getImageFromVariant(data?.product.images, "primary")?.secureUrl
              }
              objectFit="contain"
              hidden={
                currentImage !==
                getImageFromVariant(data?.product.images, "primary")?.secureUrl
              }
            />

            {/* second image */}
            {getImageFromVariant(data?.product.images, "secondary") && (
              <Image
                width={"100%"}
                height={"300px"}
                alt="Product image"
                src={
                  getImageFromVariant(data?.product.images, "secondary")
                    ?.secureUrl
                }
                objectFit="contain"
                hidden={
                  currentImage !==
                  getImageFromVariant(data?.product.images, "secondary")
                    ?.secureUrl
                }
              />
            )}

            {/* second image */}
            {getImageFromVariant(data?.product.images, "tertiary") && (
              <Image
                width={"100%"}
                height={"300px"}
                alt="Product image"
                src={
                  getImageFromVariant(data?.product.images, "tertiary")
                    ?.secureUrl
                }
                objectFit="contain"
                hidden={
                  currentImage !==
                  getImageFromVariant(data?.product.images, "tertiary")
                    ?.secureUrl
                }
              />
            )}

            <HStack
              // bg="teal.100"
              justifyContent={"center"}
              alignItems="center"
              mt="2"
            >
              {/* second */}
              {
                data?.product.images.length === 1 ? null : (
                  <>
                    {/* first */}
                    <Center
                      h={70}
                      w={70}
                      cursor="pointer"
                      bg="white"
                      border={"1px"}
                      borderColor={
                        currentImage ===
                        getImageFromVariant(data?.product.images, "primary")
                          ?.secureUrl
                          ? "brand"
                          : "gray.400"
                      }
                      borderRadius={"md"}
                      onClick={() =>
                        setCurrentImage(
                          getImageFromVariant(data?.product.images, "primary")
                            ?.secureUrl
                        )
                      }
                    >
                      <Image
                        w={"40px"}
                        h={"40px"}
                        src={
                          getImageFromVariant(data?.product.images, "primary")
                            ?.secureUrl
                        }
                      />
                    </Center>

                    {getImageFromVariant(data?.product.images, "secondary") ? (
                      <Center
                        h={70}
                        w={70}
                        cursor="pointer"
                        bg="white"
                        border={"1px"}
                        borderColor={
                          currentImage ===
                          getImageFromVariant(data?.product.images, "secondary")
                            ?.secureUrl
                            ? "brand"
                            : "gray.400"
                        }
                        borderRadius={"md"}
                        onClick={() =>
                          setCurrentImage(
                            getImageFromVariant(
                              data?.product.images,
                              "secondary"
                            )?.secureUrl
                          )
                        }
                      >
                        <Image
                          w={"40px"}
                          h={"40px"}
                          src={
                            getImageFromVariant(
                              data?.product.images,
                              "secondary"
                            )?.secureUrl
                          }
                        />
                      </Center>
                    ) : null}

                    {getImageFromVariant(data?.product.images, "tertiary") ? (
                      <Center
                        h={70}
                        w={70}
                        cursor="pointer"
                        bg="white"
                        border={"1px"}
                        borderColor={
                          currentImage ===
                          getImageFromVariant(data?.product.images, "tertiary")
                            ?.secureUrl
                            ? "brand"
                            : "gray.400"
                        }
                        borderRadius={"md"}
                        onClick={() =>
                          setCurrentImage(
                            getImageFromVariant(
                              data?.product.images,
                              "tertiary"
                            )?.secureUrl
                          )
                        }
                      >
                        <Image
                          w={"40px"}
                          h={"40px"}
                          src={
                            getImageFromVariant(
                              data?.product.images,
                              "tertiary"
                            )?.secureUrl
                          }
                        />
                      </Center>
                    ) : null}
                  </>
                )
                // : data?.product.images.map(({ secureUrl, id }) => (
                //     <Center
                //       key={id}
                //       h={70}
                //       w={70}
                //       cursor="pointer"
                //       bg="white"
                //       border={"1px"}
                //       borderColor={
                //         currentImage === secureUrl ? "brand" : "gray.400"
                //       }
                //       borderRadius={"md"}
                //       onClick={() => setCurrentImage(secureUrl)}
                //     >
                //       <Image w={"40px"} h={"40px"} src={secureUrl} />
                //     </Center>
                // ))
              }
            </HStack>
          </Box>
          <VStack
            flex="1"
            spacing={"4"}
            alignItems="flex-start"
            justifyContent={{ md: "center" }}
          >
            {(meData?.me &&
              meData?.me.username === data?.product.user.username) ||
            meData?.me?.role === "admin" ? (
              <ProductActions product={data?.product} />
            ) : null}
            <Heading fontFamily={"suise"} size={"lg"} color="main">
              {data?.product.name}
            </Heading>
            <Text
              fontFamily={"suise"}
              fontSize={"25px"}
              fontWeight="bold"
              color="brand"
            >
              {data?.product.price}
            </Text>
            <Button
              size={"sm"}
              bg="brand"
              color="white"
              _hover={{ bg: "brand", color: "white" }}
              _active={{ bg: "brand", color: "white" }}
              onClick={() => onOpen()}
            >
              Contacter
            </Button>
            <Box>
              <Text color="gray.600">
                Publi?? par:{" "}
                <Box as="span" color="main">
                  {/* <CLink textDecoration={"underline"}> */}
                  <Link
                    href={`/${data?.product.user.username}`}
                    passHref
                    style={{ textDecoration: "underline" }}
                  >
                    {data?.product.user.username}
                  </Link>
                  {/* </CLink> */}
                </Box>{" "}
              </Text>
            </Box>
          </VStack>
        </Flex>
        <Divider h="2px" mt="4" />
        <Box mb="6">
          {data?.product.description ? (
            <>
              <Text color="brand" fontFamily={"suise"} mb="4">
                Description
              </Text>
              {/* <div
                dangerouslySetInnerHTML={{ __html: data?.product.description }}
              ></div> */}

              <Text style={{ whiteSpace: "pre-line" }}>
                {data?.product.description}
              </Text>
            </>
          ) : null}
        </Box>
        <Heading
          fontSize="18px"
          color="#242424"
          fontWeight="medium"
          fontFamily="suise"
          py={4}
        >
          Les Produits simulaires
        </Heading>
        {userLocationData && data && similarCategoryData ? (
          <SimilarProducts
            country={userLocationData.userLocation.country}
            categoryId={similarCategoryData.getCategory.id}
            excludedProductId={data?.product.id}
          />
        ) : null}
      </Container>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Contacter Vendeur
            </AlertDialogHeader>

            <AlertDialogBody>
              <HStack justifyContent={"center"}>
                <Link href={`tel:${data?.product.user.phone}`}>
                  <Button colorScheme={"blue"} size="sm">
                    Appel
                  </Button>
                </Link>
                <Link
                  href={`https://wa.me/${data?.product.user.phone}?text=Je suis intereser par votre produit publie sur https://nkasugu.com/product/preview/${data?.product.id}`}
                >
                  <Button colorScheme={"whatsapp"} size="sm">
                    Whatsapp
                  </Button>
                </Link>
                <Link href={`sms:${data?.product.user.phone}`}>
                  <Button colorScheme={"messenger"} size="sm">
                    Sms
                  </Button>
                </Link>
              </HStack>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Annuler
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default ProductDetail;
