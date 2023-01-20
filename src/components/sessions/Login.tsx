import { Flex, VStack, Link as Link, Box } from "@chakra-ui/react";
import { useFormik } from "formik";
import NextLink from "next/link";
import * as yup from "yup";
import { MeDocument, MeQuery, useLoginMutation } from "../../generated/graphql";
import Button from "../button/Button";
import InputField from "../input/InputField";
import { toErrorMap } from "../../utils/toErrorMap";
import { useRouter } from "next/router";

interface Props {
  next: string;
}

const Login: React.FC<Props> = ({ next }) => {
  const router = useRouter();

  // graphql hooks
  const [login, { loading: loginLaoding }] = useLoginMutation({
    update: (cache, { data }) => {
      cache.writeQuery<MeQuery>({
        query: MeDocument,
        data: {
          me: data?.login.user,
        },
      });
    },
  });

  const handleFormSubmit = async (values: any) => {
    console.log(values);
    // login user
    const response = await login({
      variables: { ...values },
    });
    // console.log(response);
    const errors = response.data?.login.errors;
    if (errors) {
      const formErrors = toErrorMap(errors);
      // console.log(formErrors);
      setErrors(formErrors);
    } else {
      if (next.includes("add-product")) {
        console.log("includes add-product");
        router.push("/vendor/add-product");
      } else {
        router.push("/");
      }
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
    <form onSubmit={handleSubmit}>
      <VStack spacing={"2.5"}>
        <InputField
          required
          type="text"
          name="usernameOrEmail"
          id="usernameOrEmail"
          label="Nom utilisateur ou Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.usernameOrEmail || ""}
          error={touched.usernameOrEmail && errors.usernameOrEmail}
        />
        <InputField
          required
          type="password"
          name="password"
          id="password"
          label="Mot de pass"
          // helperText="Au moins 8 caractères"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password || ""}
          error={touched.password && errors.password}
        />
        <Flex w="full" justifyContent={"flex-end"}>
          <Link
            as={NextLink}
            href="/forgot-password"
            passHref
            fontSize="xs"
            _hover={{ textDecoration: "none" }}
          >
            Mot de passe oublié?
          </Link>
        </Flex>
        <Button
          type="submit"
          fullWidth
          loading={loginLaoding}
          loadingText="Connexion"
        >
          Se connecter
        </Button>
      </VStack>
    </form>
  );
};

const initialValues = {
  usernameOrEmail: "",
  password: "",
};

const formSchema = yup.object().shape({
  // email: yup.string().email("invalid email").required("${path} is required"),
  usernameOrEmail: yup
    .string()
    .min(3, "Nom d'utilisateur ou Email doit être supérieur à 2 caractères")
    .required("Nom d'utilisateur ou Email vide"),
  password: yup
    .string()
    .min(8, "Mot de passe doit être supérieur à 7 caractères")
    .required("Mot de passe vide"),
});

export default Login;
