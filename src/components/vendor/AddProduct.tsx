import {
  Text,
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  FormLabel,
  Stack,
  useMediaQuery,
  useToast,
  VStack,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { cache, useEffect, useRef, useState } from "react";
import * as yup from "yup";
import {
  useAddProductMutation,
  useGetCategoriesLazyQuery,
  useGetCategoriesQuery,
  useMeQuery,
  useUserLocationQuery,
} from "../../generated/graphql";
import { getFormatedOptions } from "../../utils/getFormatedOptions";
import { slugify } from "../../utils/slugify";
import { toErrorMap } from "../../utils/toErrorMap";
import Button from "../button/Button";
import DropZone from "../Dropzone";
import Error from "../Error";
import InputField from "../input/InputField";
import Loading from "../Loading";
import Select from "../select/Select";
import Textarea from "../textarea/Textarea";
import { useRouter } from "next/router";

interface Props {
  countryCode: string;
}

const AddProduct: React.FC<Props> = ({ countryCode }) => {
  const toast = useToast();
  const [isSmallerThan500] = useMediaQuery("(max-width: 500px)");
  const InputsGroupDirection = isSmallerThan500 ? "column" : "row";
  const router = useRouter();
  const selectInputRef = useRef<any>();

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const [imageError, setImageError] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [productSlug, setProductSlug] = useState("");

  // graphql
  const [addProduct, { loading: addProductLoading }] = useAddProductMutation();

  const { data: user, loading: userLoading, error: userError } = useMeQuery();
  const {
    data: userLocation,
    loading: userLocationLoading,
    error: userLocationError,
  } = useUserLocationQuery({ variables: { countryCode } });

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

  // required data loading and error state
  const loading = userLoading && userLocationLoading && categoriesLoading;
  const error = userError && userLocationError && categoriesError;

  const getProductSlug = () => {
    const category = subCategories?.categories.find(
      (item) => item.id === form.values.subCategoryId
    );
    return `/product/${slugify(category?.name as string)}/${productSlug}`;
  };

  const handleFormSubmit = async () => {
    const { name, price, description, cityId, categoryId, subCategoryId } =
      form.values;

    // if (name.includes("/")) {
    //   setErrors({ name: "Le nom ne doit pas contenir le character /" });
    //   return;
    // }

    if (!image1 && !image2 && !image3) {
      setImageError(true);
      console.log("img1:", image1);
      console.log("img2:", image2);
      console.log("image3:", image3);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const slug = slugify(name);

    let img1 = image1;
    let img2 = image2;
    let img3 = image3;

    if (!img1 && img2) {
      img1 = img2;
      img2 = null;
    } else if (!img1 && img3) {
      img1 = img3;
      img3 = null;
    }

    if (img1 && !img2 && img3) {
      img2 = img3;
      img3 = null;
    }

    // console.log("description:", description);
    // const splited = description.split("\n");
    // splited.forEach((p) => console.log(p));
    // const formatedDescription = splited.reduce(
    //   (acc, cur) => acc + "<br/>" + cur
    // );
    // console.log(formatedDescription);

    // submit product to api
    const response = await addProduct({
      variables: {
        image1: img1,
        image2: img2,
        image3: img3,
        name,
        slug,
        price,
        // description: `<p>${formatedDescription}</p>`,
        description,
        cityId: user?.me.city.id as string,
        countryId: user?.me.country.id,
        // countryId: userLocation?.userLocation.country.id,
        userId: user?.me?.id as string,
        categoryId,
        subCategoryId,
      },
      update: (cache) => {
        cache.evict({ fieldName: `products:{"categoryId":null}` });
      },
    });

    // get user to published product page or publish new product
    const errors = response.data?.addProduct.errors;
    if (errors) {
      const formErrors = toErrorMap(errors);
      // console.log(formErrors);
      form.setErrors(formErrors);
    }

    if (response.data?.addProduct.product) {
      // product published
      setProductSlug(response.data.addProduct.product.slug);
      setDialogOpen(true);
      toast({
        title: "Produit Publié",
        // description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });

      // reset form
      setImage1(null);
      setImage2(null);
      setImage3(null);
      // form.resetForm();
      form.setFieldValue("name", "");
      form.setFieldValue("price", "");
      form.setFieldValue("description", "");
    }
  };

  const form = useFormik({
    onSubmit: handleFormSubmit,
    initialValues,
    validationSchema: formSchema,
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

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Container maxW="container.md" py={6}>
      <Box flex="1">
        <Card variant="elevated" bg="white">
          <CardHeader>
            <Heading size="md">Nouveau Produit</Heading>
          </CardHeader>
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
                <Stack w={"full"} direction={InputsGroupDirection} spacing="4">
                  {categories?.categories && (
                    <Select
                      placeholder="Choisissez une Catégorie"
                      onChange={async (e) => {
                        const val = e.currentTarget.value;
                        form.setFieldValue("categoryId", val);
                        const parentId = val as string;
                        await getSubCategories({ variables: { parentId } });
                      }}
                      onBlur={handleBlur}
                      error={
                        touched.categoryId && (errors.categoryId as string)
                      }
                      options={getFormatedOptions(categories.categories)}
                    />
                  )}
                  {form.values.categoryId && !subCategoriesLoading ? (
                    <Select
                      placeholder="Choisissez une sous Catégorie"
                      onChange={(e) => {
                        form.setFieldValue(
                          "subCategoryId",
                          e.currentTarget.value
                        );
                      }}
                      onBlur={handleBlur}
                      error={
                        touched.subCategoryId &&
                        (errors.subCategoryId as string)
                      }
                      options={getFormatedOptions(subCategories.categories)}
                    />
                  ) : null}
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
                  loading={addProductLoading}
                  loadingText="Publication"
                >
                  Publier
                </Button>
              </Box>
            </form>
          </CardBody>
        </Card>
      </Box>
    </Container>
  );
};

const initialValues = {
  name: "",
  price: "",
  cityId: "",
  countryId: "",
  categoryId: "",
  subCategoryId: "",
  description: "",
};

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Entrez le nom du produit")
    .matches(
      // /^[a-zA-Z0-9@]+$/,
      /^[A-Za-z\s]*$/,
      "Le nom ne doit pas contenir de caratere speciaux"
    ),
  price: yup.string().required("Entrez un prix"),
  // cityId: yup.string().required("Choisissez une Ville"),
  categoryId: yup.string().required("Choisissez une Catégorie"),
  subCategoryId: yup.string().required("Choisissez une sous Catégorie"),
  // description: yup.string().required("Donnez une description"),
});

export default AddProduct;
