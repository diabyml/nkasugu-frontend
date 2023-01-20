import AppLayout from "../../components/layout/AppLayout";
import EditProfile from "../../components/user/EditProfile";
import { withApollo } from "../../utils/withApollo";

const EditProfilePage = () => {
  return (
    <AppLayout>
      <EditProfile />
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(EditProfilePage);
