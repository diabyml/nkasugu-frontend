import { Link} from "@chakra-ui/react";
import React from "react";

interface Props {
  children: any;
  href: string;
}

const MobileLink: React.FC<Props> = ({ children, href }) => {
  return (
    <Link
      display="block"
      w="full"
      h="full"
      _hover={{ textDecoration: "none" }}
      color="#0f0f0f"
      py={1}
      px={4}
      href={href}
    >
      {children}
    </Link>
  );
};

export default MobileLink;
