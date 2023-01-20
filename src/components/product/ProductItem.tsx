import { Card, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import CustomImage from "../image/Image";
import { ProductFragmentFragment, useMeQuery } from "../../generated/graphql";
import { MdPlace } from "react-icons/md";
import Link from "next/link";
import { sortImages } from "../../utils/sortImages";

interface Props {
  product: ProductFragmentFragment;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <Card
      variant="outline"
      rounded={"0"}
      bg="white"
      p={2}
      w="full"
      // maxW="200px"
    >
      <Link href={`/product/${product.slug}`} passHref>
        <Center>
          <Image
            width={"100%"}
            height={150}
            objectFit="contain"
            src={sortImages(product?.images || [])[0].secureUrl}
            alt="Product Image"
            borderRadius="lg"
          />
        </Center>
        <Text
          fontSize={{ base: "12px", md: "14px" }}
          fontFamily="suise"
          color="#0f0f0f"
          // py={"2"}
        >
          {product.name}
        </Text>
        <Text
          color="#0f0f0f"
          fontFamily="suise"
          fontSize={{ base: "16px", md: "20px" }}
          fontWeight="bold"
          py={"5px"}
        >
          {product.price}
        </Text>
        <Flex alignItems={"center"}>
          <MdPlace style={{ color: "#6D1A36" }} />
          <Text fontSize="11px" color="#6f8596">
            {product.city.name}, {product.country.name}
          </Text>
        </Flex>
      </Link>
    </Card>
  );
};

export default ProductItem;
