import Image from "next/image";
import { chakra } from "@chakra-ui/react";

const CustomImage = chakra(Image, {
  shouldForwardProp: (prop) =>
    ["height", "width", "quality", "src", "alt"].includes(prop),
});

export default CustomImage;
