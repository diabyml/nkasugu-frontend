import {
  Alert,
  AlertIcon,
  Box,
  VStack
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { useForgotPasswordMutation } from "../../generated/graphql";
import Button from "../button/Button";
import Card1 from "../card/Card1";
import InputField from "../input/InputField";

const ForgotPassword = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);

  // graphql
  const [forgotPassword, { loading: forgotPasswordLoading }] =
    useForgotPasswordMutation();

  const handleFormSubmit = async (values: any) => {
    const response = await forgotPassword({
      variables: { email: values.email },
    });

    if (response.data?.forgotPassword) {
      // email sent successfully
      setIsEmailSent(true);
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    onSubmit: handleFormSubmit,
    initialValues,
    validationSchema: formSchema,
  });
  return (
    <Card1 withPadding>
      <form onSubmit={handleSubmit}>
        <VStack spacing={"2.5"}>
          <InputField
            required
            type="email"
            name="email"
            id="email"
            label="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email || ""}
            error={touched.email && errors.email}
          />
          <Button
            type="submit"
            fullWidth
            loading={forgotPasswordLoading}
            loadingText="Réinitialisation"
          >
            Réinitialiser
          </Button>
        </VStack>
        <Box mt="4">
          {isEmailSent ? (
            <Alert status="success">
              <AlertIcon />
              Succès! Veuillez vérifier vos e-mails pour un e-mail de
              réinitialisation.
            </Alert>
          ) : null}
        </Box>
      </form>
    </Card1>
  );
};

const initialValues = {
  email: "",
};

const formSchema = yup.object().shape({
  email: yup.string().email("email invalide").required("Email vide"),
});

export default ForgotPassword;
