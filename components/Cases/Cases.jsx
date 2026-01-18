import React from "react";
import CaseCard from "./CaseCard";
import Dots from "../Dots";

const defaultCases = [
  {
    description: "Сайт для маркетингово агенства Everest",
    backgroundImage: "/cases/1/1.webp",
    caseImages: ["/cases/1/1.webp", "/cases/1/2.webp", "/cases/1/3.webp"],
    headerItems: ["Разработка сайта"],
    headerIcons: ["/cases/R.png", "/cases/T.png", "/cases/K.png"],
  },
  {
    description: "Разработка сайта для анти-кафе EZHUB",
    backgroundImage: "/cases/2/1.webp",
    caseImages: ["/cases/2/1.webp", "/cases/2/2.webp", "/cases/2/3.webp"],
    headerItems: ["Разработка сайта"],
    headerIcons: ["/cases/R.png", "/cases/T.png", "/cases/K.png"],
  },
  {
    description: "Разработка интернет магазина Aura Vessels",
    backgroundImage: "/cases/3/1.webp",
    caseImages: ["/cases/3/1.webp", "/cases/3/2.webp"],
    headerItems: ["Разработка сайта"],
    headerIcons: ["/cases/R.png", "/cases/T.png", "/cases/K.png"],
  },
  {
    description: "Сервис поиска заведений Urban",
    backgroundImage: "/cases/4/1.webp",
    caseImages: ["/cases/4/1.webp", "/cases/4/2.webp", "/cases/4/3.webp"],
    headerItems: ["Мобильная разработка"],
    headerIcons: ["/cases/R.png", "/cases/T.png", "/cases/K.png"],
  },
];

const Cases = ({ casesList = defaultCases }) => {
  return (
    <div className="container">
      <div className="sectionTitle">
        <Dots />
        <h3>Наши кейсы</h3>
      </div>
      <div className="casesContainer">
        {casesList.map((caseItem, index) => (
          <CaseCard key={`${caseItem.title}-${index}`} {...caseItem} />
        ))}
      </div>
    </div>
  );
};

export default Cases;
