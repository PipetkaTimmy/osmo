import React from "react";
import CaseCard from "./CaseCard";
import Dots from "../Dots";

const defaultCases = [
  {
    description: "Айдентика промышленного завода Sottozero",
    backgroundImage: "/cases/case-1.png",
    headerItems: ["Разработка сайта", "Тагрет", "Контекст"],
    headerIcons: ["/cases/R.png", "/cases/T.png", "/cases/K.png"],
  },
  {
    description: "Айдентика промышленного завода Sottozero",
    backgroundImage: "/cases/case-2.png",
    headerItems: ["Разработка сайта", "Тагрет", "Контекст"],
    headerIcons: ["/cases/R.png", "/cases/T.png", "/cases/K.png"],
  },
  {
    description: "Айдентика промышленного завода Sottozero",
    backgroundImage: "/cases/case-1.png",
    headerItems: ["Разработка сайта", "Тагрет", "Контекст"],
    headerIcons: ["/cases/R.png", "/cases/T.png", "/cases/K.png"],
  },
  {
    description: "Айдентика промышленного завода Sottozero",
    backgroundImage: "/cases/case-2.png",
    headerItems: ["Разработка сайта", "Тагрет", "Контекст"],
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
