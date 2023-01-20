import { Box } from '@chakra-ui/react';
import React from 'react';

interface Props {
    children: React.ReactNode,
    withPadding?:boolean;
}

const Card1: React.FC<Props> = ({children,withPadding}) => {
    return (
        <Box
        maxW={{ md: "400px" }}
        // mx={"auto"}
        bg="white"
        border="1px"
        borderColor={"#e0e0e0"}
        borderRadius={"4.5px"}
        mt={{ md: "20px" }}
        mx={{ base: "-16px", md: "auto" }}
        py="4"
        px={withPadding && "4"}
      >{children}</Box>
    )
}

export default Card1;