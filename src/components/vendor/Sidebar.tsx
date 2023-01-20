import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const SideBar: React.FC<Props> = () => {
  return (
    <Box  w="230px" display={{base:"none",md:"block"}}  pos="sticky" top={"20"} alignSelf="flex-start">
      <Card variant="elevated">
        <CardBody>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nemo
            beatae deserunt odio maxime minima, blanditiis ex explicabo sed,
            consequatur atque accusantium amet molestias voluptatum id. Ipsa
            assumenda consequuntur ea!
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
};

export default SideBar;
