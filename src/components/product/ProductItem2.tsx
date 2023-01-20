import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { ProductFragmentFragment } from "../../generated/graphql";

interface Props {
  product: ProductFragmentFragment;
}

const ProductItem2: React.FC<Props> = ({ product }) => {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${product.images[0].secureUrl})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={product.images[0].secureUrl}
          />
        </Box>
        <Stack pt={6} align={"center"}>
          {/* <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Brand
          </Text> */}
          <Heading fontSize={"md"} fontFamily={"body"} fontWeight={500}>
            {product.name}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"lg"}>
              {product.price}
            </Text>
            {/* <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text> */}
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default ProductItem2;
