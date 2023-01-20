import { useApolloClient } from "@apollo/client";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { AiFillShop } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { useLogoutMutation, useMeQuery } from "../../generated/graphql";
import ProfileAvatar from "./ProfileAavatar";
import SelectCountryDialogue from "../SelectCountryDialogue";

interface Props {}

const ProfileMenu: React.FC<Props> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { data: meData } = useMeQuery();
  const apolloClient = useApolloClient();
  const [logout] = useLogoutMutation();

  return (
    <>
      <Menu>
        <MenuButton>
          <ProfileAvatar user={meData?.me} />
        </MenuButton>
        <MenuList>
          <MenuItem
            icon={<AddIcon />}
            onClick={() => router.push("/vendor/add-product")}
          >
            Vendre
          </MenuItem>
          <MenuItem
            icon={<AiFillShop />}
            onClick={() => {
              router.push(`/${meData.me.username}`);
            }}
          >
            Mes produits
          </MenuItem>
          {/* <MenuItem icon={<FaUserCheck />}>Mon compte</MenuItem> */}
          <MenuItem
            icon={<EditIcon />}
            onClick={() => router.push(`/vendor/edit-profile`)}
          >
            Profile
          </MenuItem>
          <MenuItem icon={<EditIcon />} onClick={onOpen}>
            Changer de pays
          </MenuItem>
          <MenuItem
            icon={<MdLogout />}
            onClick={async () => {
              await logout();
              apolloClient.resetStore();
            }}
          >
            Se déconnecter
          </MenuItem>
        </MenuList>
      </Menu>
      <SelectCountryDialogue
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
    </>
  );
};

export default ProfileMenu;
