import { Box, Link, ListItem } from "@chakra-ui/react";
import { useGetCategoriesQuery } from "../../generated/graphql";
import ScrollableContent from "../scroll/ScrollableContent";

const CategoryLink = ({ children, path }) => (
  <Link
    fontFamily={"suise"}
    display="inline-block"
    fontSize={{ base: "md", md: "lg" }}
    color="link"
    fontWeight="bold"
    py={"3"}
    href={path}
    whiteSpace={"nowrap"}
    _hover={{ textDecoration: "none" }}
  >
    {children}
  </Link>
);

//  router.push(`/categorie/${name}?id=${id}`).then(() => router.reload);

const CategoriesBanner = () => {
  const { data, loading, error } = useGetCategoriesQuery();

  if (loading) {
    return <Box> loading... </Box>;
  }

  return (
    <Box bg="beige.100">
      <ScrollableContent centerContent withPadding>
        {data?.categories.map(({ id, name }) => (
          <ListItem key={id}>
            <CategoryLink path={`/categorie/${name}?id=${id}`}>
              {name}
            </CategoryLink>
          </ListItem>
        ))}
      </ScrollableContent>
    </Box>
  );
};

const links = [
  {
    id: "01",
    name: "Sneakers",
    path: "#",
  },
  {
    id: "02",
    name: "Shoes",
    path: "#",
  },
  {
    id: "03",
    name: "Apparel",
    path: "#",
  },
  {
    id: "04",
    name: "Electronics",
    path: "#",
  },
  {
    id: "05",
    name: "Trading Cards",
    path: "#",
  },
  {
    id: "06",
    name: "Collectibles",
    path: "#",
  },
  {
    id: "07",
    name: "Accessories",
    path: "#",
  },
];

export default CategoriesBanner;
