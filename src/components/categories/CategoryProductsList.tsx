import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useGetCategoryProductsLazyQuery } from "../../generated/graphql";
import ProductItem from "../product/ProductItem";

interface Props {
  country: any;
  categoryId: string;
}

const CategoryProductsList: React.FC<Props> = ({ country, categoryId }) => {
  const [getProducts, { loading, error, data, fetchMore, variables }] =
    useGetCategoryProductsLazyQuery({
      variables: {
        cursor: null,
        limit: 50,
        countryId: country.id,
        categoryId: categoryId,
      },
      notifyOnNetworkStatusChange: true,
    });

  useEffect(() => {
    getProducts();
  }, [categoryId]);

  if (error) {
    <Box>Une erreur s'est produite...</Box>;
  }

  return (
    <Container maxW={"container.xl"} py={"2"}>
      {/* repeat(auto-fit, minmax(200px, 1fr)) */}
      {!data?.categoryProducts.data.length && !loading ? (
        <Box pt="6">
          <Text textAlign="center" fontFamily="uise" size="sm">
            Pas de produit dans cette categorie !
          </Text>
        </Box>
      ) : (
        <Grid
          // templateColumns={{
          //   base: "repeat(2,1fr)",
          //   sm: "repeat(auto-fit, minmax(200px, 1fr))",
          // }}
          templateColumns={{
            base: "repeat(2,1fr)",
            // sm: "repeat(auto-fit, minmax(200px, 1fr))",
            sm: "repeat(3,200px)",
            md: "repeat(4,200px)",
          }}
          justifyContent={"center"}
          gap={2}
        >
          {data?.categoryProducts.data.map((product) => (
            <GridItem key={product.id}>
              <ProductItem product={product} />
            </GridItem>
          ))}
        </Grid>
      )}
      {data?.categoryProducts.hasMore ? (
        <Center pt={4}>
          <Button
            isLoading={loading}
            onClick={() => {
              fetchMore({
                variables: {
                  limit: variables.limit,
                  cursor:
                    data.categoryProducts.data[
                      data.categoryProducts.data.length - 1
                    ].createdAt,
                },
              });
            }}
          >
            Voir plus
          </Button>
        </Center>
      ) : null}
    </Container>
  );
};

export default CategoryProductsList;
