import * as React from "react";
import withRoot from "../withRoot";
import AppAppBar from "./../views/AppAppBar";
import AppFooter from "./../views/AppFooter";
import ProductCategories from "./../views/ProductCategories";
import ProductCTA from "./../views/ProductCTA";
import ProductHero from "./../views/ProductHero";
import ProductHowItWorks from "./../views/ProductHowItWorks";
import ProductSmokingHero from "./../views/ProductSmokingHero";
import ProductValues from "./../views/ProductValues";

function Home() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Home);
