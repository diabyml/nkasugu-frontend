import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { useGetProductsQuery } from "../../generated/graphql";
import ProductItem from "./ProductItem";
import NewCountryWelcome from "../newCountryWelcome";

interface Props {
  country: any;
  isRecentProducts?: boolean;
}

const ProductList: React.FC<Props> = ({ country, isRecentProducts }) => {
  const { loading, error, data, fetchMore, variables } = useGetProductsQuery({
    variables: {
      cursor: null,
      limit: 50,
      countryId: country?.id,
      categoryId: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  // if (loading) {
  //   return <Box>loading...</Box>;
  // }

  if (error) {
    return <Box>Une erreur s'est produite...</Box>;
  }

  return (
    <Container maxW={"container.xl"}>
      {/* repeat(auto-fit, minmax(200px, 1fr)) */}
      {isRecentProducts && data?.products.data.length ? (
        <Heading
          // fontSize="18px"
          size="lg"
          color="#242424"
          fontWeight="semibold"
          fontFamily="suise"
          py={4}
          textAlign={{ sm: "center" }}
        >
          Les Produits recents
        </Heading>
      ) : (
        <NewCountryWelcome />
      )}
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          // sm: "repeat(auto-fit, minmax(200px, 1fr))",
          sm: "repeat(3,200px)",
          md: "repeat(4,200px)",
        }}
        justifyContent={"center"}
        gap={2}
      >
        {data?.products.data.map((product) => (
          <GridItem key={product.id}>
            <ProductItem product={product} />
          </GridItem>
        ))}
      </Grid>
      {data?.products.hasMore ? (
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
      ) : null}
    </Container>
  );
};

export default ProductList;
