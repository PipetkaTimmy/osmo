import React from "react";
import Dots from "../Dots";


const ServiceIntro = ({ title, body, footerTitle, footerBody }) => {
  return (
    <div className="serviceIntro">
      <div className="serviceIntroCard">
        <div className="serviceIntroHeader">
          <div className="sectionTitle">
            <Dots />
            <h3>{title}</h3>
          </div>
          <p>{body}</p>
        </div>
        <div className="serviceIntroFooter">
          <h4>{footerTitle}</h4>
          <p>{footerBody}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntro;
