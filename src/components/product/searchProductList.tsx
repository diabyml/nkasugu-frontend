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
import { usePaginatedSearchQuery } from "../../generated/graphql";
import ProductItem from "./ProductItem";

interface Props {
  query: string;
  countryId: string;
}

const SearchProductsList: React.FC<Props> = ({ query, countryId }) => {
  const { loading, error, data, fetchMore, variables } =
    usePaginatedSearchQuery({
      variables: { countryId: countryId, query: query, limit: 50 },
      notifyOnNetworkStatusChange: true,
    });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (error) {
    return <Text>une erreur s'est produite</Text>;
  }

  return (
    <Container maxW={"container.xl"} py="4">
      {/* repeat(auto-fit, minmax(200px, 1fr)) */}
      {!data?.paginatedSearch.data.length && !loading ? (
        <Box py="4">
          <Text fontFamily="suise" textAlign="center">
            Aucun résultat trouvé
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
          {data?.paginatedSearch.data.map((product) => (
            <GridItem key={product.id}>
              <ProductItem product={product} />
            </GridItem>
          ))}
        </Grid>
      )}
      {data?.paginatedSearch.hasMore ? (
        <Center pt={4}>
          <Button
            isLoading={loading}
            onClick={() => {
              fetchMore({
                variables: {
                  limit: variables.limit,
                  skip: data.paginatedSearch.data.length,
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

export default SearchProductsList;
