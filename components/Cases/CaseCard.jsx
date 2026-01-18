"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const defaultCaseImages = ["/cases/1/1.webp", "/cases/1/2.webp", "/cases/1/3.webp"];

const CaseCard = ({
  description,
  backgroundImage,
  headerItems,
  headerIcons,
  caseImages,
}) => {
  const hasHeaderItems = Array.isArray(headerItems) && headerItems.length > 0;
  const hasIcons = Array.isArray(headerIcons) && headerIcons.length > 0;
  const images = caseImages?.length ? caseImages : defaultCaseImages;
  const initialIndex = Math.max(0, images.indexOf(backgroundImage));
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFading, setIsFading] = useState(false);
  const [isCursorActive, setIsCursorActive] = useState(false);
  const fadeOutRef = useRef(null);
  const fadeInRef = useRef(null);
  const cursorFrameRef = useRef(null);
  const cardRef = useRef(null);
  const currentImage = images[currentIndex] || backgroundImage || images[0];
  const cardStyle = currentImage ? { "--case-bg": `url(${currentImage})` } : undefined;

  useEffect(() => {
    return () => {
      if (fadeOutRef.current) {
        clearTimeout(fadeOutRef.current);
      }
      if (fadeInRef.current) {
        clearTimeout(fadeInRef.current);
      }
      if (cursorFrameRef.current) {
        cancelAnimationFrame(cursorFrameRef.current);
      }
    };
  }, []);

  const handleAdvance = () => {
    if (isFading || images.length === 0) {
      return;
    }
    setIsFading(true);
    fadeOutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 220);
    fadeInRef.current = setTimeout(() => {
      setIsFading(false);
    }, 520);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleAdvance();
    }
  };

  const handleMouseMove = (event) => {
    if (cursorFrameRef.current) {
      return;
    }
    const { clientX, clientY } = event;
    cursorFrameRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) {
        cursorFrameRef.current = null;
        return;
      }
      const rect = card.getBoundingClientRect();
      const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
      const y = Math.min(Math.max(clientY - rect.top, 0), rect.height);
      card.style.setProperty("--cursor-x", `${x}px`);
      card.style.setProperty("--cursor-y", `${y}px`);
      cursorFrameRef.current = null;
    });
  };

  const handleMouseEnter = (event) => {
    setIsCursorActive(true);
    const card = cardRef.current;
    if (!card) {
      return;
    }
    const rect = card.getBoundingClientRect();
    const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
    const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);
    card.style.setProperty("--cursor-x", `${x}px`);
    card.style.setProperty("--cursor-y", `${y}px`);
  };
  const handleMouseLeave = () => setIsCursorActive(false);

  return (
    <div
      className={`caseCard ${isCursorActive ? "is-cursor-active" : ""}`}
      style={cardStyle}
      role="button"
      tabIndex={0}
      ref={cardRef}
      onClick={handleAdvance}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`caseCardFade ${isFading ? "is-active" : ""}`} aria-hidden="true" />
      <div className="caseCardHover" aria-hidden="true">
        <img src="/cursor.png" alt="" />
        <span>Нажмите для просмотра</span>
      </div>
      <div className="caseCardHeader">
        {hasHeaderItems && (
          <div className="caseCardHeaderRow">
            {headerItems.map((item, index) => (
              <div className="caseCardHeaderItem" key={`${item}-${index}`}>
                {hasIcons && (
                  <Image
                    src={headerIcons[index % headerIcons.length]}
                    alt=""
                    width={20}
                    height={20}
                  />
                )}
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default CaseCard;
