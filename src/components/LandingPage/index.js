import React, { useState, useEffect } from "react";
import { Navigation } from "../../views/navigation";
import { Header } from "../../views/header";
import { Features } from "../../views/features";
import { About } from "../../views/about";
import { Services } from "../../views/services";
import { Gallery } from "../../views/gallery";
import { Testimonials } from "../../views/testimonials";
import { Team } from "../../views/Team";
import { Contact } from "../../views/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "../../assets/css/landing-page.css";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/bootstrap.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default LandingPage;