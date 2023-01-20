import { Container, Heading, VStack, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import {
  UserSnippetFragment,
  useEditUserMutation,
  useMeQuery,
  useUserLocationQuery,
} from "../../generated/graphql";
import { getFormatedOptions } from "../../utils/getFormatedOptions";
import Button from "../button/Button";
import InputField from "../input/InputField";
import Select from "../select/Select";
import Loading from "../Loading";
import PageLayout from "../layout/PageLayout";
import Error from "../Error";

interface Props {}

const EditProfile: React.FC<Props> = () => {
  const { data: meData, loading: meLoading, error: meError } = useMeQuery();
  const [countryCode, setCountryCode] = useState("");
  const toast = useToast();

  const {
    data: userLocationData,
    error: userLocationError,
    loading: userLocationLoading,
  } = useUserLocationQuery({ variables: { countryCode } });

  const [editUser, { loading: editUserLoading }] = useEditUserMutation();

  const loading = meLoading && userLocationLoading;
  const error = userLocationError && meError;

  const initialValues = {
    username: "",
    email: "",
    phone: "",
    cityId: "",
    //   password: "",
    // re_password: "",
  };

  const handleFormSubmit = async (values: any) => {
    console.log("edit user handling...");
    const response = await editUser({
      variables: { userId: meData.me.id, ...values },
    });

    if (response?.data.editUser) {
      //   console.log("user edited");
      toast({
        title: "Sauvegardé",
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

  useEffect(() => {
    const countryCode = JSON.parse(localStorage.getItem("countryCode"));
    setCountryCode(countryCode || "ML");
  }, []);

  useEffect(() => {
    if (meData?.me) {
      const { username, email, phone, city } = meData.me;
      form.setFieldValue("username", username);
      form.setFieldValue("email", email);
      form.setFieldValue("phone", phone);
      form.setFieldValue("cityId", city.id);
    }
  }, [meData]);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    // setErrors,
  } = form;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Container
      maxW={"container.sm"}
      bg="white"
      borderRadius={"lg"}
      py={"4"}
      mt={2}
    >
      <Heading
        fontFamily={"suise"}
        fontWeight={"semibold"}
        size={"md"}
        mb={"4"}
      >
        Editer Profile
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={"4"}>
          <InputField
            required
            type="text"
            name="username"
            id="username"
            label="Nom utilisateur"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.username || ""}
            error={touched.username && errors.username}
          />
          <InputField
            required
            id="email"
            name="email"
            label="Email"
            type="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email || ""}
            error={touched.email && errors.email}
          />
          <InputField
            required
            id="phone"
            name="phone"
            label="Numéro de téléphone"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.phone || ""}
            error={touched.phone && errors.phone}
          />
          <Select
            placeholder="Choisissze votre Ville"
            name="cityId"
            id="cityId"
            onChange={(e) => {
              form.setFieldValue("cityId", e.currentTarget.value);
            }}
            onBlur={handleBlur}
            error={touched.cityId && (errors.cityId as string)}
            options={getFormatedOptions(
              userLocationData?.userLocation.country.cities || []
            )}
          ></Select>
          <Button
            type="submit"
            fullWidth
            loading={editUserLoading}
            loadingText="Sauvegarde"
          >
            Sauvegarder
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Nom d'utilisateur doit être supérieur à 2 caractères")
    .required("Nom vide"),
  cityId: yup.string().required("Ville non choisi"),
  phone: yup.string().required("Numero de téléphone vide"),
  email: yup.string().email("Email invalid").required("Email vide"),
});

export default EditProfile;
