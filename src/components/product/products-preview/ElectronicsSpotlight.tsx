import { Container } from "@chakra-ui/react";
import React from "react";
import ScrollableProducts1 from "../ScrollableProducts1";
import { Box } from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";

const products = [
  {
    id: "1",
    name: "Flipper Zero Portable Multitool",
    price: "$216",
    salePrice: "$269",
    img: "https://images.stockx.com/images/Flipper-Zero-Portable-Multitool.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1656090965&q=75"
  },
  {
    id: "2",
    name: "Flipper Zero Portable Multitool",
    price: "$216",
    salePrice: "$269",
    img: "https://images.stockx.com/images/Flipper-Zero-Portable-Multitool.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1656090965&q=75"
  },
  {
    id: "3",
    name: "Flipper Zero Portable Multitool",
    price: "$216",
    salePrice: "$269",
    img: "https://images.stockx.com/images/Flipper-Zero-Portable-Multitool.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1656090965&q=75"
  },
  {
    id: "4",
    name: "Flipper Zero Portable Multitool",
    price: "$216",
    salePrice: "$269",
    img: "https://images.stockx.com/images/Flipper-Zero-Portable-Multitool.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1656090965&q=75"
  },
  {
    id: "5",
    name: "Flipper Zero Portable Multitool",
    price: "$216",
    salePrice: "$269",
    img: "https://images.stockx.com/images/Flipper-Zero-Portable-Multitool.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1656090965&q=75"
  },
  {
    id: "6",
    name: "Flipper Zero Portable Multitool",
    price: "$216",
    salePrice: "$269",
    img: "https://images.stockx.com/images/Flipper-Zero-Portable-Multitool.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1656090965&q=75"
  },
];

const ElectronicsSpotlight = () => {
  return (
    <Container maxW="container.xl">
      <ScrollableProducts1
        title={
          <Box>
            Electronic <QuestionIcon />
          </Box>
        }
        products={products}
        withMoreButton
      />
    </Container>
  );
};

export default ElectronicsSpotlight;
