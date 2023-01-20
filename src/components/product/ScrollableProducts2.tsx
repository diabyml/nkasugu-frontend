import {
  Box,
  Card,
  Center,
  chakra,
  Heading,
  HStack,
  ListItem,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ScrollableContent from "../scroll/ScrollableContent";

interface Props {
  title: any;
  categories: any[];
}

const ProductImage = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["height", "width", "quality", "src", "alt"].includes(prop),
});

const ScrollableProducts2: React.FC<Props> = ({ title, categories }) => {
  const [isMediumDevice] = useMediaQuery("(min-width:52em)");

  // React.useEffect( () => console.log("is medium d:",isMediumDevice) ,[isMediumDevice]);
  return (
    <Box>
      <Heading
        fontSize="18px"
        color="#242424"
        fontWeight="medium"
        fontFamily="suise"
        mt="6"
        mb="4"
      >
        {title}
      </Heading>
      <HStack justify={"space-between"} overflowX="auto">
        {categories.map((cat) => (
          <ProductImage
            key={cat.id}
            as={Image}
            width={!isMediumDevice ? 158 : 227}
            height={!isMediumDevice ? 108.6 : 155}
            style={{ width: "auto", height: "auto" }}
            objectFit="contain"
            src={cat.img}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        ))}
      </HStack>
      {/* <ScrollableContent>
          {categories.map((cat) => (
            <ListItem key={cat.id}>
              <Card variant="outline" rounded={"0"} bg="white" minW="158px" p={2}>
                <Center>
                  <ProductImage
                    as={Image}
                    width={140}
                    height={75}
                    objectFit="contain"
                    src={cat.img}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                </Center>
              </Card>
            </ListItem>
          ))}
        </ScrollableContent> */}
    </Box>
  );
};

export default ScrollableProducts2;
