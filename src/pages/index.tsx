import { Box, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Error from "../components/Error";
import Loading from "../components/Loading";
import SelectCountryDialogue from "../components/SelectCountryDialogue";
import HeroSection from "../components/hero/hero";
import AppLayout from "../components/layout/AppLayout";
import PageLayout from "../components/layout/PageLayout";
import ProductList from "../components/product/ProductList";
import SellButton from "../components/vendor/SellButton";
import { useUserLocationQuery } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [countryCode, setCountryCode] = useState("");
  const {
    data: userLocationData,
    error: userLocationError,
    loading: userLocationLoading,
  } = useUserLocationQuery({ variables: { countryCode }, skip: !countryCode });

  const loading = userLocationLoading;
  const error = userLocationError;

  useEffect(() => {
    const countryCode = JSON.parse(localStorage.getItem("countryCode"));
    if (!countryCode) {
      onOpen();
    }
    setCountryCode(countryCode || "ML");
  }, []);

  if (loading) {
    return (
      <AppLayout>
        <Loading />
      </AppLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <Error />
      </PageLayout>
    );
  }

  return (
    <>
      <AppLayout>
        <Box pb={4}>
          {/* <CategoriesBanner /> */}
          {/* <Container maxW={"container.xl"}>
            <Carousel options={headerSlides} />
          </Container> */}
          <HeroSection />
          {/* <NewCountryWelcome /> */}
          {/* <RecommendedProducts /> */}
          {userLocationData && (
            <Box pb={"6"}>
              <ProductList
                country={userLocationData?.userLocation.country}
                isRecentProducts
              />
            </Box>
          )}
          {/* <PopularBrands /> */}
          {/* <ElectronicsSpotlight /> */}
          {/* <FeaturedAccessories /> */}
          {/* <Container maxW={"container.xl"} mt={6}>
            <Carousel options={options1} />
          </Container> */}
          {/* <ImagesCategory
              categories={[
                {
                  img: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltfbdfe111c2a871c8/63864c4c7a64f810a2989c6b/Holiday_Editorial_-_A_Comprehensive_Gamers_Gift_Guide-11.22.22SecondaryA.jpg?format=jpg&auto=webp&height=438",
                },
                { img: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blta257c7e50216ae71/63864caf0fd02e10825073ba/Perfect_Headphones_For_Every_Occasion_BannersSecondaryB.jpg?format=jpg&auto=webp&height=438" },
              ]}
            /> */}
        </Box>
        <SellButton />
        <SelectCountryDialogue
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
        />
      </AppLayout>
    </>
  );
};

const headerSlides = [
  {
    img: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt6a44257c49c4cd2c/638a20034c3a2b1b59fa1bcd/Most_Wanted_Gifts_for_Him_and_Her-11.30.22-Primary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450",
  },
  {
    img: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltb243aa4c314ad11c/638a1dc7d25e251ab059dcdc/AJ11_Cherry_ReStockX_Promo_BannersPrimary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450",
  },
  {
    img: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt7e323648ff75c72e/638a1f13e22e8c66068d071d/Sporty-&-Rich-x-adidas_Primary_Desktop_EN.png?quality=90&auto=webp&format=pjpg&height=450",
    // img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt3f7d2f1b0218f367/6384cb356237d71069350cdc/Primary_Desktop-EN_(4).png?quality=90&auto=webp&format=pjpg&height=450",
    // img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltc4b54fd811741ec7/6380d7f86f703310906d6f92/Air_Jordan_11_Cherry_regular_release_assetsPrimary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450",
    // img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    img: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltc71f25545af564f9/63863b79ea930410907ded75/Art-Review-Art-Prints-Assets_Primary_Desktop_EN.png?quality=90&auto=webp&format=pjpg&height=450",
    // img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const options1 = [
  {
    img: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blte524dbaf5e97bb0c/638504700d85671097f1c996/Swatch_x_Omega_-_Primary_Desktop_(2).jpg?quality=90&auto=webp&format=pjpg&height=450",
  },
  {
    img: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blte19b1e54a9ba0319/6386485911407d1056d62e2c/Now_Trending_(Fashion_Voice_Current_Trends)_A&A_BannersPrimary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450",
  },
  {
    img: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt067432ef5c0251b8/6387746eef9bce1086eb6ec8/StockX-Apparel-Launch_Primary_Desktop-EN.png?quality=90&auto=webp&format=pjpg&height=450",
  },
  {
    img: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt9bc351717f1ee241/63864b5a71c75510a0ca4d9a/New_Releases_from_Supreme_FOG_and_morePrimary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450",
  },
];

export default withApollo({ ssr: true })(Index);
