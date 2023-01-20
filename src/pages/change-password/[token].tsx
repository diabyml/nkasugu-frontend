import { Alert, AlertIcon, Box, VStack } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "../../components/button/Button";
import Card1 from "../../components/card/Card1";
import InputField from "../../components/input/InputField";
import { withApollo } from "../../utils/withApollo";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  MeDocument,
  MeQuery,
  useChangePasswordMutation,
} from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import PageLayout from "../../components/layout/PageLayout";

const ChangePassword = () => {
  const [tokenError, setTokenError] = useState("");
  const router = useRouter();
  const token = router.query.token as string;

  //   graphql
  const [changePassword, { loading: changePasswordLoading }] =
    useChangePasswordMutation({
      update: (cache, { data }) => {
        cache.writeQuery<MeQuery>({
          query: MeDocument,
          data: {
            me: data?.changePassword.user,
          },
        });
      },
    });

  const handleFormSubmit = async (values: any) => {
    const response = await changePassword({
      variables: {
        token,
        newPassword: values.password,
      },
    });

    // console.log(response);
    const errors = response.data?.changePassword.errors;
    if (errors) {
      const formErrors = toErrorMap(errors);
      console.log(formErrors);
      setErrors(formErrors);

      if (formErrors?.token) {
        setTokenError(formErrors.token);
      }
    } else {
      router.push("/");
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setErrors,
  } = useFormik({
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
              type="password"
              name="password"
              id="password"
              label="Nouveau Mot de pass"
              // helperText="Au moins 8 caractères"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password || ""}
              error={touched.password && errors.password}
            />
            <Button
              type="submit"
              fullWidth
              loading={changePasswordLoading}
              loadingText="Changement"
            >
              Changer
            </Button>
          </VStack>
          <Box mt="4">
            {tokenError ? (
              <Alert status="error">
                <AlertIcon />
                une erreur s&apos;est produite!
              </Alert>
            ) : null}
          </Box>
        </form>
      </Card1>
    </PageLayout>
  );
};

const initialValues = {
  usernameOrEmail: "",
  password: "",
};

const formSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Mot de passe doit être supérieur à 7 caractères")
    .required("Mot de passe vide"),
});

export default withApollo({ ssr: false })(ChangePassword);
