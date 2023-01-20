import React from "react";
import { useRouter } from "next/router";
import AppLayout from "../../../components/layout/AppLayout";
import { withApollo } from "../../../utils/withApollo";
import ProductPreview from "../../../components/product/ProductPreview";

const ContactUserProductPreview = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <AppLayout>
      <ProductPreview id={id as string} />
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(ContactUserProductPreview);
