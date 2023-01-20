import { Box, Center, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Props {
  paddingBottom?: string;
}

const Footer: React.FC<Props> = ({ paddingBottom }) => {
  return (
    <Box pb={{ base: paddingBottom, md: 0 }} bg="main">
      <Box as="footer" py={6} px={4} color="white">
        <Center>
          <Box>
            {/* <Text color="" textAlign={"center"} size="sm">
              Développé par <Link href={"#"}>diabyml</Link>
            </Text> */}
            <Text size="sm">© 2023 Copyright Nkasugu</Text>
            <Text size="xs" textAlign={"center"} color="gray.300">
              Developed by diabyml
            </Text>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default Footer;
