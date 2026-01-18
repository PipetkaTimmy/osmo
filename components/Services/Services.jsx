import React from "react";
import Dots from "../Dots";
import ServiceCard from "./ServiceCard";
import { defaultServices } from "@/data/services";

const Services = ({ cards }) => {
  const resolvedCards = Array.isArray(cards) && cards.length
    ? cards
    : defaultServices;

  return (
    <div className="container">
      <div className="sectionTitle">
        <Dots />
        <h3>Для роста вашего бизнеса</h3>
      </div>
      <div className="servicesContainer">
        {resolvedCards.map((card, index) => (
          <ServiceCard key={`${card.title}-${index}`} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Services;
