import {
  Box
} from "@chakra-ui/react";
import DesktopNavigation from "../nav/DesktopNavigation";
import MobileNavigation from "../nav/MobileNavigation";

const Header = () => {
  return (
    <Box as="header" bg="white">
      <Box px={"4"}>
      <Box display={{base:'none',md:"block"}}><DesktopNavigation /></Box>
      <Box display={{base:"block",md:"none"}}><MobileNavigation/></Box>
      </Box>
    </Box>
  );
};

export default Header;
