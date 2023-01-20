import { Button as ChakraButton } from "@chakra-ui/react";
import React, { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> &  {
    variant?: "primary" | "outlined",
    children: React.ReactNode,
    fullWidth?: boolean,
    loading?: boolean,
    loadingText?: string,
}

const Button: React.FC<Props> = ({children,variant = "primary", fullWidth, loading,loadingText,...props}) => {
  const isPrimary = variant === "primary";
  return (
    <ChakraButton
      // as="button"
      display={"flex"}
      border={"1px"}
      bg={ isPrimary ? "main" : "transparent" }
      color={ isPrimary ? "white" : "main"}
      rounded="none"
      fontFamily={"suise"}
      fontWeight="bold"
      px="4"
      py="1"
      w={fullWidth && "full"}
      isLoading={loading}
      loadingText={loadingText}
      _hover={{
        bg: !isPrimary && "main",
        color: "white",
      }}
      _focusVisible={{boxShadow:"none"}}
      {...props}
      _active={{backgroundColor:"main",transform: 'scale(0.98)',}}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
