import { HamburgerIcon, SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, IconButton, useDisclosure } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useMeQuery } from "../../generated/graphql";
import { SearchQueryContext } from "../../providers/SearchQueryProvider";
import Logo from "../Logo";
import SearchField from "../search/SearchField";
import ProfileAvatar from "../user/ProfileAavatar";
import MobileNavDrawer from "./MobileNavDrawer";
import ProfileMenu from '../user/ProfileMenu';

const MobileNavigation = () => {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const { handleSearchQueryChange } = useContext(SearchQueryContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // graphql
  const { data } = useMeQuery();

  const handleSearchModeChange = () => setIsSearchMode((prev) => !prev);

  return (
    <Flex alignItems="center" justifyContent="space-between" py="2" gap={"2"}>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        aria-label="Open menu"
        size={"sm"}
        icon={<HamburgerIcon />}
      />
      {isSearchMode ? (
        <Box flex="1">
          <SearchField variant="sm" />
        </Box>
      ) : (
        <Logo variant="small" />
      )}
      <HStack spacing="2">
        <IconButton
          aria-label={isSearchMode ? "Close Search" : "Search database"}
          size={"sm"}
          icon={isSearchMode ? <CloseIcon /> : <SearchIcon />}
          onClick={() => {
            if (isSearchMode) {
              handleSearchQueryChange("");
            }
            handleSearchModeChange();
          }}
        />
        {data?.me ? <ProfileMenu/> : null}
      </HStack>
      <MobileNavDrawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      />
    </Flex>
  );
};

export default MobileNavigation;
