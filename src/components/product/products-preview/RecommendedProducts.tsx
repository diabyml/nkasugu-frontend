import React from "react";
import { Box, Container } from "@chakra-ui/react";
import ScrollableProducts1 from "../ScrollableProducts1";
import { QuestionIcon } from "@chakra-ui/icons";

interface Props {}

const products = [
  {
    id: "1",
    name: "Jordan 1 Retro High OG Chicago Lost and Found",
    price: "$420",
    salePrice: "$269",
    img: "https://images.stockx.com/images/Air-Jordan-11-Retro-Cherry-2022-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1669100668&q=75"
  },
  {
    id: "2",
    name: "Jordan 1 Retro High OG Chicago Lost and Found",
    price: "$420",
    salePrice: "$269",
    img: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1665691099&q=75"
  },
  {
    id: "3",
    name: "Jordan 1 Retro High OG Chicago Lost and Found",
    price: "$420",
    salePrice: "$269",
    img: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1665691099&q=75"
  },
  {
    id: "4",
    name: "Jordan 1 Retro High OG Chicago Lost and Found",
    price: "$420",
    salePrice: "$269",
    img: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1665691099&q=75"
  },
  {
    id: "5",
    name: "Jordan 1 Retro High OG Chicago Lost and Found",
    price: "$420",
    salePrice: "$269",
    img: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1665691099&q=75"
  },
  {
    id: "6",
    name: "Jordan 1 Retro High OG Chicago Lost and Found",
    price: "$420",
    salePrice: "$269",
    img: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1665691099&q=75"
  },
];

const RecommendedProducts: React.FC<Props> = () => {
  return (
    <Container maxW="container.xl">
      <ScrollableProducts1
        title={
          <Box>
            {" "}
            Recommandé Pour Vous <QuestionIcon />{" "}
          </Box>
        }
        products={products}
      />
    </Container>
  );
};

export default RecommendedProducts;
