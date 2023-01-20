import { QuestionIcon } from "@chakra-ui/icons";
import { Box, Container } from "@chakra-ui/react";
import React from "react";
import ScrollableProducts1 from "../ScrollableProducts1";

interface Props {}

const products = [
  {
    id: "1",
    name: "Flipper Zero Portable Multitool",
    price: "$216",
    salePrice: "$269",
    img: "https://images.stockx.com/images/Off-White-Classic-Industrial-Belt-FW21-Black.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1637620896&q=75",
  },
  {
    id: "2",
    name: "Flipper Zero Portable Multitool",
    price: "$216",
    salePrice: "$269",
    img: "https://images.stockx.com/images/The-Marc-Jacobs-The-Tote-Bag-Mini-Black.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&trimcolor=ffffff&updated_at=1647368362&q=75",
  },
  {
    id: "3",
    name: "Flipper Zero Portable Multitool",
    price: "$216",
    salePrice: "$269",
    img:"https://images.stockx.com/images/Louis-Vuitton-Key-Pouch-Monogram-Canvas-Brown-Studio-v2.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&trimcolor=ffffff&updated_at=1641846584&q=75"
  },
  {
    id: "4",
    name: "Flipper Zero Portable Multitool",
    price: "$216",
    salePrice: "$269",
    img:"https://images.stockx.com/images/Gucci-Marmont-Super-Mini-Matelasse-Calfskin-Leather-Black-Studio-v1.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&trimcolor=ffffff&updated_at=1606317838&q=75"
  },
  {
    id: "5",
    name: "Flipper Zero Portable Multitool",
    price: "$216",
    salePrice: "$269",
    img:"https://images.stockx.com/images/Gucci-NY-Yankees-Embroidered-Butterfly-Baseball-Cap-Burgundy.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1635353284&q=75"
  },
  {
    id: "6",
    name: "Flipper Zero Portable Multitool",
    price: "$216",
    salePrice: "$269",
    img:"https://images.stockx.com/images/Goyard-Saint-Sulpice-Black-Natural-V.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&trimcolor=ffffff&updated_at=1637163832&q=75"
  },
];

const FeaturedAccessories: React.FC<Props> = () => {
  return (
    <Container maxW="container.xl">
      <ScrollableProducts1
        title={
          <Box>
            Accessoires en vedette <QuestionIcon />
          </Box>
        }
        products={products}
        withMoreButton
      />
    </Container>
  );
};

export default FeaturedAccessories;
