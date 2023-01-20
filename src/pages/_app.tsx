import { ChakraProvider } from "@chakra-ui/react";
import "../global.css";

import theme from "../theme";
import { AppProps } from "next/app";
import SearchQueryProvider from "../providers/SearchQueryProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchQueryProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SearchQueryProvider>
  );
}

export default MyApp;
