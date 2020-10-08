import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ValueProp from "../components/ValueProp";
import SocialProof from "../components/SocialProof";
import ProductBenefits from "../components/ProductBenefits";
import ProductBenefits2 from "../components/ProductBenefits2";
import ProductFeatures from "../components/ProductFeatures";
import CallToAction from "../components/CallToAction";
import Plataforma from "../components/Plataforma";

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <ValueProp />
    <ProductBenefits2/>
    <SocialProof/>
    <Plataforma />
    <ProductFeatures />
    <ProductBenefits />
    <CallToAction />
  </Layout>
);

export default IndexPage;
