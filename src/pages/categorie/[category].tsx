import { Box, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import {
  useGetProductsLazyQuery,
  useUserLocationQuery,
} from "../../generated/graphql";
import { withApollo } from "../../utils/withApollo";
import CategoryProductsList from "../../components/categories/CategoryProductsList";
import Loading from "../../components/Loading";
import PageLayout from "../../components/layout/PageLayout";
import Error from "../../components/Error";

const Category = () => {
  const router = useRouter();
  let categoryId = router.query.id as string;
  const [countryCode, setCountryCode] = useState("");

  const {
    data: userLocationData,
    error: userLocationError,
    loading: userLocationLoading,
  } = useUserLocationQuery({ variables: { countryCode } });

  const loading = userLocationLoading;
  const error = userLocationError;

  useEffect(() => {
    const countryCode = JSON.parse(localStorage.getItem("countryCode"));
    setCountryCode(countryCode || "ML");
  }, []);

  if (loading) {
    return (
      <AppLayout>
        <Loading />
      </AppLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <Error />
      </PageLayout>
    );
  }

  return (
    <AppLayout>
      <Container maxW="container.xl">
        <CategoryProductsList
          country={userLocationData.userLocation.country}
          categoryId={categoryId}
        />
      </Container>
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(Category);
