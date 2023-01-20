import { Fragment } from "react";
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Button,
  Link,
  Icon,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaGithub } from "react-icons/fa";
import { useMeQuery } from "../../generated/graphql";
import { useRouter } from "next/router";
import NextLink from "next/link";

const HeroSection = () => {
  const { data: meData } = useMeQuery();
  const router = useRouter();
  return (
    <Fragment>
      <Container maxW="6xl" px={{ base: 6, md: 10 }} py={14}>
        <Stack direction={{ base: "column", md: "row" }}>
          <Stack direction="column" spacing={10} justifyContent="center">
            <Heading
              fontSize="5xl"
              lineHeight={1}
              fontWeight="bold"
              textAlign="left"
            >
              La platforme idéale{" "}
              <chakra.span
                bgGradient="linear(to-br, #228be6, #15aabf)"
                bgClip="text"
              >
                pour vendre ou acheter
              </chakra.span>
              <br /> partout dans le monde.
            </Heading>
            {/* <Text
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize="lg"
              textAlign="left"
              fontWeight="400"
              maxW="700px"
            >
              La platforme idéale pour vendre ou acheter partout dans le monde.
            </Text> */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 0, sm: 2 }}
              flexWrap="wrap"
            >
              <Button
                h={12}
                px={6}
                bgGradient="linear(to-br, #228be6, #15aabf)"
                color="white"
                _hover={{ bgGradient: "linear(to-br, #228be6, #228be6)" }}
                variant="solid"
                size="lg"
                rounded="md"
                fontWeight="bold"
                mb={{ base: 2, sm: 0 }}
                onClick={() => {
                  // join?state=register
                  if (meData?.me) {
                    // sell page
                    router.push("/vendor/add-product");
                  } else {
                    router.push({
                      pathname: "/join",
                      query: "state=register?next=add-product",
                    });
                  }
                }}
              >
                <chakra.span> Commencer à vendre </chakra.span>
              </Button>
              <a href="mailto:nkasugu@gmail.com">
                <Flex
                  border="1px solid"
                  borderColor="gray.700"
                  justify="center"
                  p={3}
                  px={4}
                  lineHeight={1.18}
                  rounded="md"
                  boxShadow="md"
                  fontWeight="bold"
                  alignItems="center"
                >
                  Nous contacter
                </Flex>
              </a>
              {/* <a href="mailto:nkasugu@gmail.com">
                <Flex
                  border="1px solid"
                  borderColor="gray.700"
                  justify="center"
                  p={3}
                  px={4}
                  lineHeight={1.18}
                  rounded="md"
                  boxShadow="md"
                  fontWeight="bold"
                  alignItems="center"
                >
                  Voir les produits 
                </Flex>
              </a> */}
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Box overflow="hidden">
        <svg
          fill={useColorModeValue("#f7fafc", "#171923")}
          width="150%"
          height="56px"
          transform="scaleX(-1)"
          filter="drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.05))"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 
            250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 
            3V0H0v27.35a600.21 600.21 0 00321.39 29.09z`}
          ></path>
        </svg>
      </Box>
    </Fragment>
  );
};

export default HeroSection;
