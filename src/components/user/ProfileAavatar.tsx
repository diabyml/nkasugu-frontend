import { Avatar } from "@chakra-ui/react";
import React from "react";
import { UserSnippetFragment } from "../../generated/graphql";

interface Props {
  user: UserSnippetFragment;
}

const ProfileAvatar: React.FC<Props> = ({ user }) => {
  return <Avatar cursor="pointer" size="sm" name={user.username} />;
};

export default ProfileAvatar;
