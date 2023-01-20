import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { useGetProductsQuery } from "../../generated/graphql";
import ProductItem from "./ProductItem";

interface Props {
  country: any;
  categoryId: string;
  excludedProductId: string;
}

const SimilarProducts: React.FC<Props> = ({
  country,
  categoryId,
  excludedProductId,
}) => {
  const { loading, error, data, fetchMore, variables } = useGetProductsQuery({
    variables: {
      cursor: null,
      limit: 8,
      countryId: country.id,
      categoryId: categoryId,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return <Box>loading...</Box>;
  }

  if (error) {
    return <Box>Une erreur s'est produite...</Box>;
  }

  return (
    <Container maxW={"container.xl"}>
      {/* repeat(auto-fit, minmax(200px, 1fr)) */}
      <Grid
        templateColumns={{
          base: "repeat(2,200px)",
        }}
        justifyContent={"center"}
        gap={2}
      >
        {data?.products.data.map((product) =>
          product.id === excludedProductId ? null : (
            <GridItem key={product.id}>
              <ProductItem product={product} />
            </GridItem>
          )
        )}
      </Grid>
      {/* {data?.products.hasMore ? (
        <Center pt={4}>
          <Button
            isLoading={loading}
            onClick={() => {
              fetchMore({
                variables: {
                  limit: variables.limit,
                  cursor:
                    data.products.data[data.products.data.length - 1].createdAt,
                },
              });
            }}
          >
            Voir plus
          </Button>
        </Center>
      ) : null} */}
    </Container>
  );
};

export default SimilarProducts;
