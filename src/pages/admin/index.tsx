import { Box, Container } from "@chakra-ui/react";
import PageLayout from "../../components/layout/PageLayout";
import useIsAdmin from "../../hooks/isAdmin";
import Link from "next/link";
import Button from "../../components/button/Button";
import { withApollo } from "../../utils/withApollo";

const AdminHomePage = () => {
  const isAdmin = useIsAdmin();
  return (
    <PageLayout>
      <Container maxW="container.xl" py={"4"}>
        {isAdmin ? (
          <Box>
            <Link href="/admin/new-category" passHref>
              <Button>New category</Button>
            </Link>
          </Box>
        ) : (
          <Box>Not an admin, please contact us!</Box>
        )}
      </Container>
    </PageLayout>
  );
};

export default withApollo({ ssr: true })(AdminHomePage);
