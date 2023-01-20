import React from 'react';
import ScrollableProducts2 from './ScrollableProducts2';
import { Container, Box } from '@chakra-ui/react';

interface Props {}

const categories = [
    {
        id: "0",
        img: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltd3896219825c683b/636c21d59d7b3f7aab426e37/Jordan-2.png?format=jpg&auto=webp&width=0.5"
    },
    {
        id: "1",
        img:"https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltd3896219825c683b/636c21d59d7b3f7aab426e37/Jordan-2.png?format=jpg&auto=webp&width=0.5"
    },
    {
        id:"2",
        img:"https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt1b5608321bbdddb1/6377cf7aac59ed1089b3193b/Louis-Vuitton2.png?format=jpg&auto=webp&width=0.5"
    },
    {
        id:"3",
        img:"https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blta3282fea122711cf/6377cf5862965b10fea0ba51/Bearbrick2.png?format=jpg&auto=webp&width=0.5"
    },
    {
        id:"4",
        img:"https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blte21a73797d877bc2/636c23339d7b3f7aab426e3f/PS5.png?format=jpg&auto=webp&width=0.5"
    },
];

const PopularBrands: React.FC<Props> = () => {
    return  <Container maxW="container.xl">
    <ScrollableProducts2
      title={"Marques Populaires"}
      categories={categories}
    />
  </Container>
}

export default PopularBrands;