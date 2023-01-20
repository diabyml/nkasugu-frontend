import React, { useState } from "react";
import { withApollo } from "../utils/withApollo";
import { Alert, AlertIcon, Box, VStack } from "@chakra-ui/react";
import * as yup from "yup";
import { useFormik } from "formik";
import PageLayout from "../components/layout/PageLayout";
import Card1 from "../components/card/Card1";
import InputField from "../components/input/InputField";
import Button from "../components/button/Button";
import { useLoadCountryMutation } from "../generated/graphql";

const LoadCountry = () => {
  const [countryLoaded, setCountryLoaded] = useState(false);
  const [loadCountry, { loading }] = useLoadCountryMutation();

  const handleFormSubmit = async (values: any) => {
    console.log(values);
    const response = await loadCountry({
      variables: { countryCode: values.countryCode },
    });

    if (response?.errors) {
      console.log("error occured");
    }

    if (response?.data.loadCountry) {
      setCountryLoaded(true);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      onSubmit: handleFormSubmit,
      initialValues,
      validationSchema: formSchema,
    });

  return (
    <PageLayout>
      <Card1 withPadding>
        <form onSubmit={handleSubmit}>
          <VStack spacing={"2.5"}>
            <InputField
              required
              type="text"
              name="countryCode"
              id="countryCode"
              label="Country Code"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.countryCode || ""}
              error={touched.countryCode && errors.countryCode}
            />
            <Button
              type="submit"
              fullWidth
              loading={loading}
              loadingText="Loading"
            >
              Load
            </Button>
          </VStack>
          <Box mt="4">
            {countryLoaded ? (
              <Alert status="success">
                <AlertIcon />
                Loaded Succès!
              </Alert>
            ) : null}
          </Box>
        </form>
      </Card1>
    </PageLayout>
  );
};

const initialValues = {
  countryCode: "",
};

const formSchema = yup.object().shape({
  countryCode: yup.string().required("Country code empty"),
});

export default withApollo({ ssr: false })(LoadCountry);
