import { AspectRatio, Box, Container, Flex, Image } from "@chakra-ui/react";
import React from "react";
import CustomImage from "../image/Image";

interface Props {
  categories: any[];
  direction?: "right" | "left";
}

const ImagesCategory: React.FC<Props> = ({
  categories,
  direction = "right",
}) => {
  const cat1 = categories[direction === "right" ? 0 : 1];
  const cat2 = categories[direction === "right" ? 1 : 0];
  return (
    <Container maxW="container.xl" py={6}>
      <Flex gap={6}>
        <Box flex="3" bg="teal">
          {/* <Image
            height={438}
            w="100%"
            objectFit="fill"
            src={cat1.img}
            alt="Green double couch with wooden legs"
          /> */}
          <AspectRatio ratio={2 / 1} maxH={438}>
            <Image
              height={438}
              w="full"
              src={cat1.img}
              alt="Category Image"
              objectFit="fill"
            />
          </AspectRatio>
        </Box>
        <Box flex="2" bg="blue">
          {/* <Image
            height={438}
            w="100%"
            objectFit="fill"
            src={cat2.img}
            alt="Green double couch with wooden legs"
          /> */}
          <AspectRatio ratio={1/1} maxH={438}>
            <Image
              height={438}
              w="full"
              src={cat2.img}
              alt="Ctegory Image"
              objectFit="fill"
            />
          </AspectRatio>
        </Box>
      </Flex>
    </Container>
  );
};

export default ImagesCategory;
