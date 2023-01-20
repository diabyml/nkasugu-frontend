import { Center, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { DESKTOP_WIDTH } from "../../constants";
import Logo from "../Logo";

const HeaderWithLogo = () => {
  const [isDesktop] = useMediaQuery(`(min-width: ${DESKTOP_WIDTH})`);
  return (
    <Center as="header" bg="white" shadow={"sm"} px={4} py={ isDesktop ? "5" : "2" }>
      <Logo variant={isDesktop ? "large" : "small"} />
    </Center>
  );
};

export default HeaderWithLogo;
