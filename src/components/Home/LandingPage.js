import React, { useEffect } from "react";
import "./LandingPage.css";

import { Link } from "react-router-dom";
import { LandingPageScript } from "./script";
import About1 from '../../assets/img/LandingPageImages/about-1.png';
import About2 from '../../assets/img/LandingPageImages/about-2.png';
import AbountLeftShape from '../../assets/img/LandingPageImages/about-left-shape.svg';
import AbountRightShape from '../../assets/img/LandingPageImages/about-right-shape.svg';
import HeroImg from '../../assets/img/LandingPageImages/hero-img.png';
import LeftDots from '../../assets/img/LandingPageImages/left-dots.svg';
import Logo from '../../assets/img/LandingPageImages/logo.svg';
import RightDots from '../../assets/img/LandingPageImages/right-dots.svg';
import { Navbar } from "components/Navbars/Navbar";


export const PreLoader = () => {
    useEffect(() => {
        LandingPageScript();
    }, []);

    return (
        <>
          <div className="preloader">
            <div className="loader">
              <div className="spinner">
                <div className="spinner-container">
                  <div className="spinner-rotator">
                    <div className="spinner-left">
                      <div className="spinner-circle"></div>
                    </div>
                    <div className="spinner-right">
                      <div className="spinner-circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

export const HeroSection = () => {
  useEffect(() => {
      LandingPageScript();
  }, []);

  return (
      <>
        <section id="home" className="hero-section">
          <div className="container">
            <div className="row align-items-center position-relative">
              <div className="col-lg-6">
                <div className="hero-content">
                  <h1 className="wow fadeInUp" data-wow-delay=".4s">
                    Your using free lite version
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    Please, purchase full version to get all sections, features
                    and permission to remove footer credit.
                  </p>
                  <Link
                    to="#"
                    className="main-btn border-btn btn-hover wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    Purchase Now
                  </Link>
                  <Link to="#features" className="scroll-bottom">
                    <i className="lni lni-arrow-down"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-img wow fadeInUp" data-wow-delay=".5s">
                  <img src={HeroImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}

export const FeatureSection = () => {
  useEffect(() => {
      LandingPageScript();
  }, []);

  return (
      <>
        <section id="features" className="feature-section pt-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-8 col-sm-10">
                <div className="single-feature">
                  <div className="icon">
                    <i className="lni lni-bootstrap"></i>
                  </div>
                  <div className="content">
                    <h3>Bootstrap 5</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-8 col-sm-10">
                <div className="single-feature">
                  <div className="icon">
                    <i className="lni lni-layout"></i>
                  </div>
                  <div className="content">
                    <h3>Clean Design</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-8 col-sm-10">
                <div className="single-feature">
                  <div className="icon">
                    <i className="lni lni-coffee-cup"></i>
                  </div>
                  <div className="content">
                    <h3>Easy to Use</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}

export const AboutSection = () => {
  useEffect(() => {
      LandingPageScript();
  }, []);

  return (
      <>
        <section id="about" className="about-section pt-150">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="about-img">
                  <img
                    src={About1}
                    alt=""
                    className="w-100"
                  />
                  <img
                    src={AbountLeftShape}
                    alt=""
                    className="shape shape-1"
                  />
                  <img
                    src={LeftDots}
                    alt=""
                    className="shape shape-2"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="about-content">
                  <div className="section-title mb-30">
                    <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                      Perfect Solution Thriving Online Business
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".4s">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      dinonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat, sed diam voluptua. At vero eos et accusam et
                      justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                      sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <Link
                    to="#"
                    className="main-btn btn-hover border-btn wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section pt-150">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="about-content">
                  <div className="section-title mb-30">
                    <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                      Easy to Use with Tons of Awesome Features
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".4s">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat, sed diam voluptua.
                    </p>
                  </div>
                  <ul>
                    <li>Quick Access</li>
                    <li>Easily to Manage</li>
                    <li>24/7 Support</li>
                  </ul>
                  <Link
                    to="#"
                    className="main-btn btn-hover border-btn wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 order-first order-lg-last">
                <div className="about-img-2">
                  <img
                    src={About2}
                    alt=""
                    className="w-100"
                  />
                  <img
                    src={AbountRightShape}
                    alt=""
                    className="shape shape-1"
                  />
                  <img
                    src={RightDots}
                    alt=""
                    className="shape shape-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}

export const NewsletterSubscription = () => {
  useEffect(() => {
      LandingPageScript();
  }, []);

  return (
      <>
        <section id="contact" className="subscribe-section pt-120">
          <div className="container">
            <div className="subscribe-wrapper img-bg">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-7">
                  <div className="section-title mb-15">
                    <h2 className="text-white mb-25">Subscribe Our Newsletter</h2>
                    <p className="text-white pr-5">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-5">
                  <form action="#" className="subscribe-form">
                    <input
                      type="email"
                      name="subs-email"
                      id="subs-email"
                      placeholder="Your Email"
                    />
                    <button type="submit" className="main-btn btn-hover">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}

export const KeyFeatures = () => {
  useEffect(() => {
      LandingPageScript();
  }, []);

  return (
      <>
        <section id="why" className="feature-extended-section pt-100">
          <div className="feature-extended-wrapper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-9">
                  <div className="section-title text-center mb-60">
                    <h2 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                      Why Choose SaaSpal
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".4s">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="single-feature-extended">
                    <div className="icon">
                      <i className="lni lni-display"></i>
                    </div>
                    <div className="content">
                      <h3>SaaS Focused</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-feature-extended">
                    <div className="icon">
                      <i className="lni lni-leaf"></i>
                    </div>
                    <div className="content">
                      <h3>Awesome Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-feature-extended">
                    <div className="icon">
                      <i className="lni lni-grid-alt"></i>
                    </div>
                    <div className="content">
                      <h3>Ready to Use</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-feature-extended">
                    <div className="icon">
                      <i className="lni lni-javascript"></i>
                    </div>
                    <div className="content">
                      <h3>Vanilla JS</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-feature-extended">
                    <div className="icon">
                      <i className="lni lni-layers"></i>
                    </div>
                    <div className="content">
                      <h3>Essential Sections</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-feature-extended">
                    <div className="icon">
                      <i className="lni lni-rocket"></i>
                    </div>
                    <div className="content">
                      <h3>Highly Optimized</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}

export const LandingFooter = () => {
  useEffect(() => {
      LandingPageScript();
  }, []);

  return (
      <>
        <footer className="landingfooter">
          <div className="container">
            <div className="widget-wrapper">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="footer-widget">
                    <div className="logo mb-30">
                      <Link to="index.html">
                        <img src={Logo} alt="" />
                      </Link>
                    </div>
                    <p className="desc mb-30 text-white">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      dinonumy eirmod tempor invidunt.
                    </p>
                    <ul className="socials">
                      <li>
                        <Link to="#">
                          <i className="lni lni-facebook-filled"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="lni lni-twitter-filled"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="lni lni-instagram-filled"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="lni lni-linkedin-original"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-2 col-lg-2 col-md-6">
                  <div className="footer-widget">
                    <h3>About Us</h3>
                    <ul className="links">
                      <li>
                        <Link to="#">Home</Link>
                      </li>
                      <li>
                        <Link to="#">Feature</Link>
                      </li>
                      <li>
                        <Link to="#">About</Link>
                      </li>
                      <li>
                        <Link to="#">Testimonials</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget">
                    <h3>Features</h3>
                    <ul className="links">
                      <li>
                        <Link to="#">How it works</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy policy</Link>
                      </li>
                      <li>
                        <Link to="#">Terms of service</Link>
                      </li>
                      <li>
                        <Link to="#">Refund policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="footer-widget">
                    <h3>Other Products</h3>
                    <ul className="links">
                      <li>
                        <Link to="#">Accounting Software</Link>
                      </li>
                      <li>
                        <Link to="#">Billing Software</Link>
                      </li>
                      <li>
                        <Link to="#">Booking System</Link>
                      </li>
                      <li>
                        <Link to="#">Tracking System</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
  );
}

export const LandingPage = () => {
  useEffect(() => {
    LandingPageScript();
  }, []);

  return (
    <>
      <PreLoader/>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <KeyFeatures />
      <NewsletterSubscription />
      <LandingFooter />
    </>
  );
};
