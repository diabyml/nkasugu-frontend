import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import PageLayout from "./layout/PageLayout";

interface Props {}

const Error: React.FC<Props> = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Text fontFamily="suise" fontSize="lg" mt="6">
        {/* une erreur s'est produite */}
        Veillez verifier votre connection et rafraichir la page,
      </Text>
    </Flex>
  );
};

export default Error;
