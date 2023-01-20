import React from "react";
import * as yup from "yup";
import { withApollo } from "../../utils/withApollo";
import PageLayout from "../../components/layout/PageLayout";
import { Box, Container, VStack, useToast } from "@chakra-ui/react";
import useIsAdmin from "../../hooks/isAdmin";
import { useFormik } from "formik";
import Button from "../../components/button/Button";
import InputField from "../../components/input/InputField";
import {
  useAddCategoryMutation,
  useGetCategoriesQuery,
} from "../../generated/graphql";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Select from "../../components/select/Select";
import { getFormatedOptions } from "../../utils/getFormatedOptions";

const NewCategoryPage = () => {
  const isAdmin = useIsAdmin();
  const toast = useToast();

  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useGetCategoriesQuery();

  const [addCategory, { loading: addCategoryLoading }] = useAddCategoryMutation(
    {
      // update: (cache, { data }) => {
      //   cache.writeQuery<GetCategoriesQuery>({
      //     query: GetCategoriesDocument,
      //     data: {
      //       categories: [ data. ]
      //     }
      //   })
      // }
    }
  );

  const loading = categoriesLoading;
  const error = categoriesError;

  const handleFormSubmit = async (values: any) => {
    //   console.log(values);
    const response = await addCategory({
      variables: {
        categoryOrCategories: form.values.categoryOrCategories,
        parentId: form.values.parentCategoryId,
      },
    });

    if (!response.data?.addCategory) {
      console.log("an error occured");
    } else {
      //    toast
      toast({
        title: "Categories ajouter !",
        // description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
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
    <PageLayout>
      <Container maxW="container.xl" py="4">
        {isAdmin ? (
          <>
            <form onSubmit={handleSubmit}>
              <VStack spacing={"2.5"}>
                {categories?.categories && (
                  <Select
                    placeholder="Choisissez une Catégorie"
                    onChange={async (e) => {
                      const val = e.currentTarget.value;
                      form.setFieldValue("parentCategoryId", val);
                    }}
                    onBlur={handleBlur}
                    error={
                      touched.parentCategoryId &&
                      (errors.parentCategoryId as string)
                    }
                    options={getFormatedOptions(categories.categories)}
                  />
                )}
                <InputField
                  required
                  type="text"
                  name="categoryOrCategories"
                  id="categoryOrCategories"
                  label="une ou des categories separe par une virgule"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.categoryOrCategories || ""}
                  error={
                    touched.categoryOrCategories && errors.categoryOrCategories
                  }
                />
                <Button
                  type="submit"
                  fullWidth
                  loading={addCategoryLoading}
                  loadingText="ajout"
                >
                  Ajouter
                </Button>
              </VStack>
            </form>
          </>
        ) : (
          <Box>Not an admin</Box>
        )}
      </Container>
    </PageLayout>
  );
};

const initialValues = {
  parentCategoryId: "",
  categoryOrCategories: "",
};

const formSchema = yup.object().shape({
  // email: yup.string().email("invalid email").required("${path} is required"),
  categoryOrCategories: yup.string().required("Entrer une ou des categories"),
});

export default withApollo({ ssr: false })(NewCategoryPage);
