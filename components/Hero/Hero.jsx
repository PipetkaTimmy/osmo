import Image from "next/image";
import React from "react";
import Dots from "../Dots";

const Hero = ({ title, subtitle, videoSrc, poster }) => {
  const resolvedTitle = title ?? "Сайты и реклама";
  const resolvedSubtitle = subtitle ?? "Увеличиваем конверсии, продажи и трафик.";
  const resolvedVideoSrc = videoSrc ?? "/hero/cubes.mp4";
  return (
    <div className="heroContainer">
      <div className="logo">
        <Image src="/logo.png" alt="OSMO" width={120} height={40} priority />
      </div>
      <video
        className="heroVideo"
        src={resolvedVideoSrc}
        poster={poster}
        autoPlay
        loop={resolvedVideoSrc !== "/hero/cubes.mp4"}
        muted
        playsInline
      />
      <div className="heroMainText">
        <div className="heroTitle">
          <Dots />
          <h1 className="heroGlitch" data-text={resolvedTitle}>
            {resolvedTitle}
          </h1>
          <Dots />
        </div>
        <h2>{resolvedSubtitle}</h2>
      </div>
    </div>
  );
};

export default Hero;
