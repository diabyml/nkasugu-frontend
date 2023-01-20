import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Props {
  variant?: "small" | "large";
}

const Logo: React.FC<Props> = ({ variant }) => {
  return (
    <Link href="/" passHref>
      <Box
        as="span"
        color={"brand"}
        fontWeight="bold"
        fontFamily={"suise"}
        fontSize={variant == "small" ? "2xl" : "3xl"}
      >
        Nkasugu
      </Box>
    </Link>
  );
};

export default Logo;
