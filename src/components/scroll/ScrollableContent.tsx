import {
  Box,
  Container,
  HStack,
  List,
  ListItem,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  children: any;
  mediaQuery?: string;
  listSpacer?: string;
  containerMaxWidth?: string;
  centerContent?: boolean;
  withPadding?: boolean;
}

const ScrollableContent: React.FC<Props> = ({
  children,
  mediaQuery = "680px",
  containerMaxWidth = "1296",
  listSpacer = 3,
  centerContent,
  withPadding
}) => {
  const [isLargerThanMediaQuery] = useMediaQuery(`(min-width: ${mediaQuery})`);
  return (
    <Box px={withPadding && "4"}>
      <Container
        maxWidth={containerMaxWidth}
        // centerContent={ centerContent &&  isLargerThanMediaQuery ? true : false}
        // centerContent={centerContent}
        px={"0"}
      >
        <List
          maxWidth={isLargerThanMediaQuery ? "auto" : containerMaxWidth}
          mx="auto"
          overflowX="auto"
        >
          <HStack spacing={listSpacer}>{children}</HStack>
        </List>
      </Container>
    </Box>
  );
};

export default ScrollableContent;
