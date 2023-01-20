import {
  Box,
  Center,
  Flex,
  HStack,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import Button from "../button/Button";
import Logo from "../Logo";
import SearchField from "../search/SearchField";
import NextLink from "next/link";
import NavLink from "./NavLink";
import CategoriesBrowser from "../categories/CategoriesBrowser";
import { useMeQuery } from "../../generated/graphql";
import ProfileAvatar from "../user/ProfileAavatar";
import { useRouter } from "next/router";
import ProfileMenu from "../user/ProfileMenu";

const DesktopNavigation = () => {
  const { data } = useMeQuery();
  const router = useRouter();
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      h="68px"
      pos="relative"
    >
      <HStack spacing={"4"} flex={"1"}>
        <Logo />
        <Center>
          {/* <NavLink>Naviguer</NavLink> */}
          <CategoriesBrowser />
        </Center>
        <Box w={"100%"}>
          <SearchField />
        </Box>
      </HStack>
      <Box ml={"4"} as="nav" display="flex" alignItems="center">
        <List display="flex" alignItems="center">
          {/* <ListItem>
            <NavLink>À propos</NavLink>
          </ListItem> */}
          {/* <ListItem>
            <NavLink>Actualités</NavLink>
          </ListItem> */}
          <ListItem>
            <Box
              color={"link"}
              fontFamily="suise"
              fontWeight="medium"
              py={"2"}
              px={"2"}
              cursor="pointer"
              onClick={() => {
                if (data?.me) {
                  // sell page
                  router.push("/vendor/add-product");
                } else {
                  router.push({ pathname: "/join", query: "state=register" });
                }
              }}
            >
              Vendre
            </Box>
            {/* <Box
              color={"link"}
              fontFamily="suise"
              fontWeight="medium"
              py={"2"}
              px={"2"}
              cursor="pointer"
              onClick={() => {}}
            >
              Changer Pays
            </Box> */}
          </ListItem>
        </List>
        {data?.me ? (
          <ProfileMenu />
        ) : (
          // <ProfileAvatar user={data.me} />
          <HStack ml={"3"}>
            <NextLink href="/join?state=login" passHref>
              <Button variant="outlined">Connexion</Button>
            </NextLink>
            <NextLink href="/join?state=register" passHref>
              <Button>S'inscrire</Button>
            </NextLink>
          </HStack>
        )}
      </Box>
    </Flex>
  );
};

export default DesktopNavigation;
