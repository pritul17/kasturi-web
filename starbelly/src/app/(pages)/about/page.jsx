import React from "react";
import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import AboutTwoSection from "@components/sections/AboutTwo";
import FeaturesOneSection from "@/src/app/_components/sections/Features";

export const metadata = {
  title: {
		default: "About",
	},
  description: AppData.settings.siteDescription,
}

const About1 = () => {
  return (
    <>
      <PageBanner pageTitle={"About us."} breadTitle={"About us"} type={1} />
      <AboutTwoSection />
      <FeaturesOneSection />
    </>
  );
};
export default About1;