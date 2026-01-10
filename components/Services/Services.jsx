import React from "react";
import Dots from "../Dots";
import ServiceCard from "./ServiceCard";

const defaultCards = [
  {
    title: "Разработка сайтов",
    items: ["Лендинг", "Корпоративный сайт", "Интернет магазин"],
    buttonLabel: "Начать проект",
    buttonHref: "#",
    backgroundImage: "/services/1.png",
  },
  {
    title: "Рекламное продвижение",
    items: ["Instagram", "Facebook", "TikTok", "Google", "Яндекс"],
    buttonLabel: "Начать проект",
    buttonHref: "#",
    backgroundImage: "/services/2.png",
  },
  {
    title: "Комплексное обновление сайта",
    items: ["Доработка", "Редизайн"],
    buttonLabel: "Начать проект",
    buttonHref: "#",
    backgroundImage: "/services/3.png",
  },
];

const Services = ({ cards = defaultCards }) => {
  return (
    <div className="container">
      <div className="sectionTitle">
        <Dots />
        <h3>Для роста вашего бизнеса</h3>
      </div>
      <div className="servicesContainer">
        {cards.map((card, index) => (
          <ServiceCard key={`${card.title}-${index}`} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Services;
