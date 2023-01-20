import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../footer/Footer";
import HeaderWithLogo from "../header/HeaderWithLogo";

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <Flex bg="grey.100" minH="100vh" direction={"column"}>
      <HeaderWithLogo />
      <Container as="main" flex={"1"} maxW={'container.xl'}>
        {children}
      </Container>
      <Footer />
    </Flex>
  );
};

export default PageLayout;
