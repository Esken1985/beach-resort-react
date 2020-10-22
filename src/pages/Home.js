import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="Luxurios Rooms" subtitle="Deluxe rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
};

export default Home;