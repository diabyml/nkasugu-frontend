import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useGetProductsQuery } from "../../generated/graphql";
import ProductItem from "../product/ProductItem";

interface Props {
  country: any;
  username: string;
}

const UserProductList: React.FC<Props> = ({ country, username }) => {
  console.log("country:::", country);
  const { loading, error, data, fetchMore, variables } = useGetProductsQuery({
    variables: {
      cursor: null,
      limit: 30,
      countryId: country.id,
      categoryId: null,
      username: username,
    },
    notifyOnNetworkStatusChange: true,
  });

  // if (loading) {
  //   return <Box>loading...</Box>;
  // }

  // if (error) {
  //   return <Box>Une erreur s'est produite...</Box>;
  // }

  return (
    <Container maxW={"container.xl"} py={"2"}>
      {/* repeat(auto-fit, minmax(200px, 1fr)) */}
      {!data?.products.data.length && !loading ? (
        <Box py="4">
          <Text textAlign="center">
            Vous n'avez pas publié de produit d'abord!
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
          {data?.products.data.map((product) => (
            <GridItem key={product.id}>
              <ProductItem product={product} />
            </GridItem>
          ))}
        </Grid>
      )}
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

export default UserProductList;
