import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  Center,
  Flex,
  Heading,
  Link,
  ListItem,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import CustomImage from "../image/Image";
import ScrollableContent from "../scroll/ScrollableContent";

interface Props {
  title: any;
  products: any[];
  withMoreButton?: boolean;
}

// const ProductImage = chakra(Image, {
//   shouldForwardProp: (prop) =>
//     ["height", "width", "quality", "src", "alt"].includes(prop),
// });

const ScrollableProducts1: React.FC<Props> = ({
  title,
  products,
  withMoreButton,
}) => {
  // if screen is mallet than 400, we have make sure that user sees that content is scrollable
  const [smallerThan400] = useMediaQuery("(max-width:400px)");
  return (
    <Box>
      <Flex alignItems={"center"} justifyContent="space-between" mt="6" mb="4">
        <Heading
          fontSize="18px"
          color="#242424"
          fontWeight="medium"
          fontFamily="suise"
        >
          {title}
        </Heading>
        {withMoreButton ? (
          <Link
            display="block"
            py={1}
            px={2}
            href="#"
            color="brand"
            _hover={{ textDecoration: "none", bg: "beige.100" }}
            fontSize="14px"
            fontFamily="suise"
          >
            Voir Plus <ArrowForwardIcon />
          </Link>
        ) : null}
      </Flex>
      <ScrollableContent listSpacer="1">
        {products.map((p) => (
          <ListItem key={p.id} minW={smallerThan400 ? "140px" : "158px"}>
            <Card variant="outline" rounded={"0"} bg="white" p={2} w="full">
              <Center>
                <CustomImage
                  width={140}
                  height={75}
                  objectFit="contain"
                  src={p.img}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
              </Center>
              <Text
                fontSize={{ base: "12px", md: "14px" }}
                fontFamily="suise"
                color="#0f0f0f"
                py={"2"}
              >
                {p.name}
              </Text>
              <Text
                color="#0f0f0f"
                fontFamily="suise"
                fontSize={{ base: "16px", md: "20px" }}
                fontWeight="bold"
              >
                $450
              </Text>
            </Card>
          </ListItem>
        ))}
      </ScrollableContent>
    </Box>
  );
};

export default ScrollableProducts1;
