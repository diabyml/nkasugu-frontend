import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  FormLabel,
  Stack,
  Text,
  VStack,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DropZone from "../../../components/Dropzone";
import Error from "../../../components/Error";
import Loading from "../../../components/Loading";
import Button from "../../../components/button/Button";
import InputField from "../../../components/input/InputField";
import AppLayout from "../../../components/layout/AppLayout";
import Textarea from "../../../components/textarea/Textarea";
import {
  useEditProductMutation,
  useGetCategoriesLazyQuery,
  useGetCategoriesQuery,
  useGetProductQuery,
  useMeQuery,
} from "../../../generated/graphql";
import { slugify } from "../../../utils/slugify";
import { withApollo } from "../../../utils/withApollo";
import { sortImages } from "../../../utils/sortImages";
import { getImageFromVariant } from "../../../utils/getImageFromVariant";

const EditProductPage = () => {
  const router = useRouter();

  const toast = useToast();
  const [isSmallerThan500] = useMediaQuery("(max-width: 500px)");
  const InputsGroupDirection = isSmallerThan500 ? "column" : "row";

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const [imageError, setImageError] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [productSlug, setProductSlug] = useState("");

  const initialValues = {
    name: "",
    price: "",
    cityId: "",
    countryId: "",
    description: "",
  };

  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useGetCategoriesQuery();

  const [
    getSubCategories,
    {
      data: subCategories,
      error: subCategoriesError,
      loading: subCategoriesLoading,
    },
  ] = useGetCategoriesLazyQuery({
    fetchPolicy: "network-only",
  });

  const [editProduct, { loading: editProductLoading }] =
    useEditProductMutation();

  //   console.log("id:", router.query.id);

  const { data: user, loading: userLoading, error: userError } = useMeQuery();

  const {
    data: productData,
    loading: productLoading,
    error: productError,
  } = useGetProductQuery({ variables: { id: router.query.id as string } });

  // required data loading and error state
  const loading = categoriesLoading && productLoading && userLoading;
  const error = categoriesError && productError && userError;

  const handleFormSubmit = async () => {
    // console.log(values);
    // console.log(image1);
    // console.log(image2);
    // console.log(image3);

    const { name, price, description, cityId } = form.values;
    const {
      name: pName,
      price: pPrice,
      description: pDescription,
      id: productId,
      slug: productSlug,
    } = productData?.product;
    const slug = slugify(name);

    const split = productSlug.split("/");
    const formatedSlug =
      split[0] + "/" + split[1] + "/" + slug + "-" + productId;
    // console.log("formated slug:", formatedSlug);

    // submit product to api
    // const images = productData?.product.images.map(({ publicId }) => publicId);
    const response = await editProduct({
      variables: {
        image1,
        image2,
        image3,
        name: pName === name ? "" : name,
        slug: pName === name ? "" : formatedSlug,
        price: pPrice === price ? "" : price,
        description: pDescription === description ? "" : description,
        productId,
        productImagesIds: JSON.stringify(productData?.product.images),
      },
      //   update: (cache: ApolloCache<any>) => {
      //     cache.reset();
      //   },
    });

    console.log(response);
    if (response?.data.editProduct) {
      router.replace(`/product/${response.data.editProduct.slug}`);
      //    toast({
      //      title: "Produit Publié",
      //      // description: "We've created your account for you.",
      //      status: "success",
      //      duration: 4000,
      //      isClosable: true,
      //      position: "top",
      //    });
    }

    // get user to published product page or publish new product
    //    const errors = response.data?.addProduct.errors;
    //    if (errors) {
    //      const formErrors = toErrorMap(errors);
    //      // console.log(formErrors);
    //      form.setErrors(formErrors);
    //    }
    //    if (response.data?.addProduct.product) {
    //      // product published
    //      setProductSlug(response.data.addProduct.product.slug);
    //      setDialogOpen(true);
    //      toast({
    //        title: "Produit Publié",
    //        // description: "We've created your account for you.",
    //        status: "success",
    //        duration: 4000,
    //        isClosable: true,
    //        position: "top",
    //      });
    //      // reset form
    //      setImage1(null);
    //      setImage2(null);
    //      setImage3(null);
    //      form.resetForm();
    //    }
  };

  const form = useFormik({
    onSubmit: handleFormSubmit,
    initialValues,
    //    validationSchema: formSchema,
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setErrors,
  } = form;

  // when product is fetched set default values
  useEffect(() => {
    if (productData?.product) {
      //   console.log("data:", productData.product);
      const { name, price, description } = productData.product;
      form.setFieldValue("name", name);
      form.setFieldValue("price", price);
      form.setFieldValue("description", description);
    }
  }, [productData]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <AppLayout>
      <Container maxW="container.md" py={6}>
        <Box flex="1">
          <Card variant="elevated" bg="white">
            <CardBody>
              <Box w="full" mb="6">
                <FormLabel fontFamily="suise" mb="2">
                  Images du produit*
                </FormLabel>
                <Flex
                  gap="2"
                  direction={InputsGroupDirection}
                  justifyContent="center"
                  alignItems="center"
                  maxW="440px"
                  mx="auto"
                >
                  <Box flex="1">
                    <DropZone
                      onChange={(files) => {
                        // console.log('files:',files);
                        const file = files[0];
                        // console.log("file0:",file);
                        setImage1(file);
                      }}
                      preview={image1}
                      // url={productData?.product.images[0].secureUrl}
                      url={
                        getImageFromVariant(
                          productData?.product.images,
                          "primary"
                        )?.secureUrl
                      }
                    />
                  </Box>
                  <Box flex="1">
                    <DropZone
                      onChange={(files) => {
                        const file = files[0];
                        // console.log("file1:",file);
                        setImage2(file);
                      }}
                      preview={image2}
                      url={
                        getImageFromVariant(
                          productData?.product.images,
                          "secondary"
                        )
                          ? getImageFromVariant(
                              productData?.product.images,
                              "secondary"
                            )?.secureUrl
                          : null
                      }
                    />
                  </Box>
                  <Box flex="1">
                    <DropZone
                      onChange={(files) => {
                        const file = files[0];
                        // console.log("file3:",file);
                        setImage3(file);
                      }}
                      preview={image3}
                      url={
                        getImageFromVariant(
                          productData?.product.images,
                          "tertiary"
                        )
                          ? getImageFromVariant(
                              productData?.product.images,
                              "tertiary"
                            )?.secureUrl
                          : null
                      }
                    />
                  </Box>
                </Flex>
                {imageError ? (
                  <Text
                    color="red"
                    fontFamily="suise"
                    textAlign="center"
                    size="sm"
                  >
                    Choisissez au moins une image
                  </Text>
                ) : null}
              </Box>
              <form onSubmit={handleSubmit}>
                <VStack spacing={"5"}>
                  <Stack w="full" direction={InputsGroupDirection} spacing={4}>
                    <InputField
                      required
                      type="name"
                      name="name"
                      id="name"
                      label="Nom produit"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name || ""}
                      error={touched.name && errors.name}
                    />
                    <InputField
                      required
                      type="text"
                      name="price"
                      id="price"
                      label="Prix"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.price || ""}
                      error={touched.price && errors.price}
                    />
                  </Stack>
                  <Stack w="full" direction={InputsGroupDirection} spacing={4}>
                    <Textarea
                      id="description"
                      label="Description"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.description || ""}
                      isRequired={false}
                      error={
                        touched.description && (errors.description as string)
                      }
                    />
                  </Stack>
                </VStack>
                <Box mt="6">
                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    loading={editProductLoading}
                    loadingText="Publication"
                  >
                    Sauvegarder
                  </Button>
                </Box>
              </form>
            </CardBody>
          </Card>
        </Box>
      </Container>
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(EditProductPage);
