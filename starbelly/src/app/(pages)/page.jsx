import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";
import Products from '@data/products';

import HeroSection from "@components/sections/Hero";
import CategoriesSection from "../_components/sections/Categories";
import AboutSection from "../_components/sections/About";

const ProductsSlider = dynamic( () => import("@components/sliders/Products"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

export const metadata = {
  title: {
    default: "Home",
  },
  description: AppData.settings.siteDescription,
}

const Home = () => {
  return (
    <>
      <HeroSection type={2} />
      <AboutSection />
      <CategoriesSection />
      <ProductsSlider items={Products.collection['popular']} slidesPerView={3} />
      <TestimonialSlider />
    </>
  );
};
export default Home;