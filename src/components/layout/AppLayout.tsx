import { Box, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import {
  AFTER_HEADER_HEIGHT_DESKTOP,
  AFTER_HEADER_HEIGHT_MOBILE,
} from "../../constants";
import { SearchQueryContext } from "../../providers/SearchQueryProvider";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import SearchResult from "../search/SearchResult";
import { useScrollTo } from "../../hooks/useScrollToTop";

interface Props {
  children: React.ReactNode;
}

// const AppLayout: React.FC<Props> = ({ children }) => {
//   const { searchQuery } = useContext(SearchQueryContext);
//   return (
//     <Flex bg="grey.100" minH="100vh" direction={"column"}>
//       <Box pos="fixed" left="0" right="0" top="0" zIndex={"sticky"}>
//         <Header />
//       </Box>
//       {/* component after sticky header pt depends on header height */}
//       <Box
//         hidden={!!!searchQuery}
//         pt={{
//           base: AFTER_HEADER_HEIGHT_MOBILE,
//           md: AFTER_HEADER_HEIGHT_DESKTOP,
//         }}
//       >
//         <SearchResult />
//       </Box>
//       <Box
//         hidden={!!searchQuery}
//         as="main"
//         flex={"1"}
//         pt={{
//           base: AFTER_HEADER_HEIGHT_MOBILE,
//           md: AFTER_HEADER_HEIGHT_DESKTOP,
//         }}
//       >
//         {children}
//       </Box>
//       {/* In search mode the footer should be hidden */}
//       <Box hidden={!!searchQuery}>
//         <Footer paddingBottom="10" />
//       </Box>
//     </Flex>
//   );
// };

const AppLayout: React.FC<Props> = ({ children }) => {
  useScrollTo(0, 0);
  return (
    <Flex bg="grey.100" minH="100vh" direction={"column"}>
      <Box pos="fixed" left="0" right="0" top="0" zIndex={"sticky"}>
        <Header />
      </Box>
      {/* component after sticky header pt depends on header height */}
      <Box
        pt={{
          base: AFTER_HEADER_HEIGHT_MOBILE,
          md: AFTER_HEADER_HEIGHT_DESKTOP,
        }}
      ></Box>
      <Box
        as="main"
        flex={"1"}
        // pt={{
        //   base: AFTER_HEADER_HEIGHT_MOBILE,
        //   md: AFTER_HEADER_HEIGHT_DESKTOP,
        // }}
      >
        {children}
      </Box>
      {/* In search mode the footer should be hidden */}
      <Box>
        <Footer paddingBottom="10" />
      </Box>
    </Flex>
  );
};

export default AppLayout;
