import React, { useEffect, useRef  } from 'react'
import Dots from '../Dots'

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let direction = 1;
    let rafId;
    let last = performance.now();
    const speed = 0.6;

    const step = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!Number.isFinite(video.duration)) {
        rafId = requestAnimationFrame(step);
        return;
      }

      video.currentTime += dt * speed * direction;

      if (video.currentTime >= video.duration) {
        video.currentTime = video.duration;
        direction = -1;
      }
      if (video.currentTime <= 0) {
        video.currentTime = 0;
        direction = 1;
      }

      rafId = requestAnimationFrame(step);
    };

    const onLoaded = () => {
      video.pause();
      last = performance.now();
      rafId = requestAnimationFrame(step);
    };

    video.addEventListener("loadedmetadata", onLoaded);
    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className='heroContainer'>
      <div className='logo'>
        <img src="/logo.png" alt="" />
      </div>
      <video
        className="heroVideo"
        src="/hero/cubes.mp4"
        autoPlay
        muted
        playsInline
      />
      <div className='heroMainText'>
        <div className='heroTitle'>
          <Dots />
          <h1>Сайты и реклама</h1>
          <Dots />
        </div>
        <h2>Увеличиваем конверсии, продажи и трафик.</h2>
      </div>
    </div>
  )
}

export default Hero