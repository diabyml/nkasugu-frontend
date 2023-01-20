import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card1 from "../components/card/Card1";
import PageLayout from "../components/layout/PageLayout";
import Login from "../components/sessions/Login";
import Register from "../components/sessions/Register";
import { withApollo } from "../utils/withApollo";

const JoinPage = () => {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0);
  const [countryCode, setCountryCode] = useState("");

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  useEffect(() => {
    setCountryCode(JSON.parse(localStorage.getItem("countryCode")) || "ML");
  }, []);

  useEffect(() => {
    setTabIndex(router.query.state === "login" ? 1 : 0);
  }, [router, setTabIndex]);

  useEffect(() => {
    console.log(tabIndex);
  }, [tabIndex]);

  // console.log("next:", router.query.state);

  return (
    <PageLayout>
      <Card1>
        <Tabs
          isFitted
          variant="line"
          index={tabIndex}
          onChange={handleTabsChange}
        >
          <TabList mb="1em">
            <Tab>S'inscrire</Tab>
            <Tab>Connexion</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Register
                next={router.query.state as string}
                countryCode={countryCode}
              />
            </TabPanel>
            <TabPanel>
              <Login next={router.query.state as string} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card1>
    </PageLayout>
  );
};

export default withApollo({ ssr: false })(JoinPage);
