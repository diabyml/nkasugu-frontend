import { useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  MeDocument,
  MeQuery,
  useRegisterMutation,
  useUserLocationQuery,
} from "../../generated/graphql";
import { getFormatedOptions } from "../../utils/getFormatedOptions";
import Button from "../button/Button";
import InputField from "../input/InputField";
import Select from "../select/Select";
import Loading from "../Loading";
import Error from "../Error";
import { toErrorMap } from "../../utils/toErrorMap";
import { useRouter } from "next/router";

interface Props {
  next: string;
  countryCode: string;
}

const Register: React.FC<Props> = ({ next, countryCode }) => {
  const router = useRouter();

  // graphql stuff
  const {
    data: userLocationData,
    error: userLocationError,
    loading: userLocationLoading,
  } = useUserLocationQuery({ variables: { countryCode } });
  const loading = userLocationLoading;
  const error = userLocationError;

  const [register, { loading: loadingRegister }] = useRegisterMutation({
    update: (cache, { data }) => {
      cache.writeQuery<MeQuery>({
        query: MeDocument,
        data: {
          me: data?.register.user,
        },
      });
    },
  });

  const handleFormSubmit = async (values: any) => {
    // register user
    const response = await register({
      variables: {
        ...values,
        countryId: userLocationData?.userLocation.country?.id as string,
      },
    });

    const errors = response.data?.register.errors;
    if (errors) {
      const formErrors = toErrorMap(errors);
      // console.log(formErrors);
      form.setErrors(formErrors);
      // form.onSubmit(() => {});
    } else {
      if (next.includes("add-product")) {
        console.log("includes add-product");
        router.push("/vendor/add-product");
      } else {
        router.push("/");
      }
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
    // setErrors,
  } = form;

  // set country code when userLocation is ready
  useEffect(() => {
    if (!error && !loading) {
      form.setFieldValue(
        "phone",
        userLocationData.userLocation.country.phoneCode
      );
    }
  }, [loading, error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log("error:", error);
    return <Error />;
  }

  return (
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
          // helperText="Le nom d'utilisateur ne doit pas contenir d'espace!"
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
        <Select
          placeholder="Choisissze votre Ville"
          name="cityId"
          id="cityId"
          onChange={(e) => {
            form.setFieldValue("cityId", e.currentTarget.value);
          }}
          onBlur={handleBlur}
          error={touched.cityId && (errors.cityId as string)}
          // options={
          //   data?.userLocation.country?.cities?.map((city) => ({
          //     value: city.id,
          //     label: city.name,
          //   })) as any
          // }
          options={getFormatedOptions(
            userLocationData.userLocation.country.cities
          )}
        ></Select>
        <Button
          type="submit"
          fullWidth
          loading={loadingRegister}
          loadingText="Inscription"
        >
          S'inscrire
        </Button>
      </VStack>
    </form>
  );
};

const initialValues = {
  username: "",
  email: "",
  phone: "",
  cityId: "",
  password: "",
  // re_password: "",
};

const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Nom d'utilisateur doit être supérieur à 2 caractères")
    // .matches(/^\s*\S[\s\S]*$/g, "* This field cannot contain only blankspaces")
    .matches(
      /^(\S+$)/,
      "* Le nom d'utilisateur ne doit pas contenir d'espace vide, example: diaby ou diaby223 ou DiabyShop"
    )
    .required("Nom vide"),
  cityId: yup.string().required("Ville non choisi"),
  phone: yup.string().required("Numero de téléphone vide"),
  email: yup.string().email("Email invalid").required("Email vide"),
  password: yup
    .string()
    .min(8, "Mot de passe doit être supérieur à 7 caractères")
    .required("Mot de pass vide"),
  // re_password: yup
  //   .string()
  //   .min(8, "Mot de passe doit être supérieur à 7 caractères")
  //   .oneOf(
  //     [yup.ref("password"), null],
  //     "Les mots de passe doivent correspondre"
  //   )
  //   .required("Veuillez retaper le mot de passe"),
});

export default Register;
