import React, { useEffect, useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import AddProduct from "../../components/vendor/AddProduct";
import { withApollo } from "../../utils/withApollo";

interface Props {}

const AddProductPage: React.FC<Props> = () => {
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    setCountryCode(JSON.parse(localStorage.getItem("countryCode")) || "ML");
  }, []);
  return (
    <AppLayout>
      <AddProduct countryCode={countryCode} />
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(AddProductPage);
