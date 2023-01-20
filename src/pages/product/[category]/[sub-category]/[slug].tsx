import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import AppLayout from "../../../../components/layout/AppLayout";
import ProductDetail from "../../../../components/product/ProductDetail";
import { withApollo } from "../../../../utils/withApollo";

const ProductDetailPage = () => {
  const router = useRouter();
  const slugPart1 = router.query.category;
  const slugPart2 = router.query["sub-category"];
  const slugPart3 = router.query.slug;
  const slug = `${slugPart1}/${slugPart2}/${slugPart3}`;

  return (
    <AppLayout>
      <ProductDetail slug={slug as string} />
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(ProductDetailPage);
