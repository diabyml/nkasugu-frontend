import { Button, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useMeQuery } from "../../generated/graphql";
import { useRouter } from "next/router";
import { SearchQueryContext } from "../../providers/SearchQueryProvider";

interface Props {}

const SellButton: React.FC<Props> = () => {
  const { searchQuery } = useContext(SearchQueryContext);
  const { data: meData } = useMeQuery();
  const router = useRouter();
  return (
    <Flex
      hidden={!!searchQuery}
      display={{ base: "flex", md: "none" }}
      //   alginItems="center"
      justifyContent="center"
      pos="fixed"
      zIndex="sticky"
      bottom={"3"}
      left="0"
      right="0"
      //   bg="teal.50"
    >
      <Button
        size="md"
        bg="brand"
        color="white"
        _hover={{
          bg: "brand",
        }}
        _active={{
          bg: "brand",
        }}
        onClick={() => {
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
        Vendre produit
      </Button>
    </Flex>
  );
};

export default SellButton;
