import Image from "next/image";
import React from "react";
import ProfileImg from "../../assets/profile.webp";
import Data from "./Data";
import "./home.css";
import ScrollDown from "./ScrollDown";
import Social from "./Social";

const Home: React.FC = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container grid">
        <div className="home_content grid">
          <Social />
          <div className="home_img">
            <Image
              src={ProfileImg}
              alt="Bhavesh Jalandhara"
              className="home_profile-img"
              priority
            />
          </div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
