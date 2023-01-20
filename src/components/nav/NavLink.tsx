import { Link } from '@chakra-ui/react';
import React from 'react';

interface Props {
    children: any;
}

const NavLink: React.FC<Props> = ({ children }) => {
    return (
      <Link
        display={"block"}
        color={"link"}
        fontFamily="suise"
        fontWeight="medium"
        py={"2"}
        px={"2"}
        _hover={{ textDecoration: "none" }}
      >
        {children}
      </Link>
    );
  };




  export default NavLink;