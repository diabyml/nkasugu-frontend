import React, { useEffect, useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { withApollo } from "../utils/withApollo";
import { useRouter } from "next/router";
import {
  usePaginatedSearchQuery,
  useUserLocationQuery,
} from "../generated/graphql";
import SearchProductsList from "../components/product/searchProductList";
import Loading from "../components/Loading";
import Error from "../components/Error";

const SearchPage = () => {
  const router = useRouter();
  const [countryCode, setCountryCode] = useState("");

  const { loading, data, error } = useUserLocationQuery({
    variables: { countryCode },
  });

  useEffect(() => {
    const countryCode = JSON.parse(localStorage.getItem("countryCode"));
    setCountryCode(countryCode || "ML");
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <AppLayout>
      <SearchProductsList
        query={router.query.query as string}
        countryId={data?.userLocation.country.id}
      />
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(SearchPage);
