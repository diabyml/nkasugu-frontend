import { useRouter } from "next/router";
import AppLayout from "../components/layout/AppLayout";
import UserProductList from "../components/user/UserProductList";
import { withApollo } from "../utils/withApollo";
import { useUserLocationQuery } from "../generated/graphql";
import Loading from "../components/Loading";
import PageLayout from "../components/layout/PageLayout";
import Error from "../components/Error";
import { useEffect, useState } from "react";

const UserProducts = () => {
  const router = useRouter();
  const username = router.query.username as string;
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
      {userLocationData && (
        <UserProductList
          country={userLocationData?.userLocation.country}
          username={username}
        />
      )}
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(UserProducts);
