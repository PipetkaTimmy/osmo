import Image from "next/image";
import React from "react";

const CaseCard = ({ description, backgroundImage, headerItems, headerIcons }) => {
  const hasHeaderItems = Array.isArray(headerItems) && headerItems.length > 0;
  const hasIcons = Array.isArray(headerIcons) && headerIcons.length > 0;
  const cardStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : undefined;

  return (
    <div className="caseCard" style={cardStyle}>
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
