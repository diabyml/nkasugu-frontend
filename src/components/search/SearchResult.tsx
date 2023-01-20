// import {
//   Box,
//   Container,
//   Flex,
//   Text,
//   Image,
//   VStack,
//   Center,
//   Button,
// } from "@chakra-ui/react";
// import React, { useContext, useEffect, useState } from "react";
// import { SearchQueryContext } from "../../providers/SearchQueryProvider";
// import {
//   usePaginatedSearchLazyQuery,
//   usePaginatedSearchQuery,
//   useSearchLazyQuery,
//   useUserLocationQuery,
// } from "../../generated/graphql";
// import { getImageFromVariant } from "../../utils/getImageFromVariant";
// import { useRouter } from "next/router";

// interface Props {}

// const SearchResult: React.FC<Props> = () => {
//   const { searchQuery, handleSearchQueryChange } =
//     useContext(SearchQueryContext);
//   const { loading, error, data, fetchMore, variables } =
//     usePaginatedSearchQuery({
//       notifyOnNetworkStatusChange: true,
//     });
//   const router = useRouter();
//   const { data: location, loading: loadingLocation } = useUserLocationQuery();

//   useEffect(() => {
//     const fetch = async () => {
//       await fetchMore({
//         variables: {
//           countryId: location.userLocation.country.id,
//           query: searchQuery,
//           limit: 1,
//           skip: data?.paginatedSearch.data.length - 1,
//         },
//       });
//     };

//     if (searchQuery) {
//       fetch();

//       // console.log("search query:", searchQuery);
//       // const fetchData = async () => {
//       //   await search({
//       //     variables: {
//       //       query: searchQuery,
//       //       countryId: location?.userLocation.country.id,
//       //       limit: 3,
//       //     },
//       //   });
//       // };
//       // fetchData();
//     }
//   }, [searchQuery]);

//   if (loading || loadingLocation) {
//     // location data is still loading
//     return <div></div>;
//   }

//   if (error) {
//     return (
//       <Text textAlign="center" p="6">
//         An error has occurred
//       </Text>
//     );
//   }

//   return (
//     <Box bg="white" minH="100vh" ml="-4" mr="-4" px={"2"}>
//       <Container maxW="container.md">
//         {/* <Heading size="sm">Search result found</Heading> */}
//         <VStack alignItems={"flex-start"}>
//           {data?.paginatedSearch.data.map(({ id, name, slug, images }) => (
//             <Flex
//               borderBottom={"1px solid "}
//               borderColor="gray.200"
//               key={id}
//               w="full"
//               p="2"
//               alignItems={"center"}
//               onClick={() => {
//                 handleSearchQueryChange("");
//                 router.push(`/product/${slug}`);
//               }}
//               cursor="pointer"
//             >
//               <Image
//                 src={getImageFromVariant(images, "primary")?.secureUrl}
//                 w="64px"
//                 h="45px"
//                 objectFit={"contain"}
//                 mr="2"
//               />
//               <Text fontFamily={"suise"} color="main" fontWeight="semibold">
//                 {name}
//               </Text>
//             </Flex>
//           ))}
//         </VStack>
//         <Center>
//           {data?.paginatedSearch.hasMore ? (
//             <Center pt={4}>
//               <Button
//                 isLoading={loading}
//                 onClick={() => {
//                   fetchMore({
//                     variables: {
//                       limit: variables.limit,
//                       skip: data.paginatedSearch.data.length - 1,
//                     },
//                   });
//                 }}
//               >
//                 Voir plus
//               </Button>
//             </Center>
//           ) : null}
//         </Center>
//       </Container>
//     </Box>
//   );
// };

// export default SearchResult;

const SearchResult = () => {
  return <div>search result</div>;
};

export default SearchResult;
