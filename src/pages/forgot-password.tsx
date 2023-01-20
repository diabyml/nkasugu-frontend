import PageLayout from "../components/layout/PageLayout";
import ForgotPassword from "../components/sessions/ForgotPassword";
import { withApollo } from "../utils/withApollo";

const ForgotPasswordPage = () => {
  return (
    <PageLayout>
      <ForgotPassword />
    </PageLayout>
  );
};

export default withApollo({ ssr: false })(ForgotPasswordPage);
