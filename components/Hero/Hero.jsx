import Image from "next/image";
import React from "react";
import Dots from "../Dots";

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="logo">
        <Image src="/logo.png" alt="OSMO" width={120} height={40} priority />
      </div>
      <video
        className="heroVideo"
        src="/hero/cubes.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="heroMainText">
        <div className="heroTitle">
          <Dots />
          <h1>Сайты и реклама</h1>
          <Dots />
        </div>
        <h2>Увеличиваем конверсии, продажи и трафик.</h2>
      </div>
    </div>
  );
};

export default Hero;
