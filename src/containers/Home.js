import * as React from "react";
import MainNavigation from "../common/navigation";
import Page from "../components/Page";
import AppFooter from "./../views/AppFooter";
import ProductCTA from "./../views/ProductCTA";
import ProductHero from "./../views/ProductHero";
import ProductHowItWorks from "./../views/ProductHowItWorks";
import ProductValues from "./../views/ProductValues";

function Home() {
  return (
    <Page title="Home">
      <MainNavigation />
      <ProductHero />
      <ProductValues />
      <ProductHowItWorks />
      <ProductCTA />
      <AppFooter />
    </Page>
  );
}

export default Home;
