import { Button } from "@heroui/react";
import React from "react";

const ServiceCard = ({
    title,
    items,
    buttonLabel = "Learn more",
    buttonHref = "#",
    backgroundImage,
}) => {
    const hasItems = Array.isArray(items) && items.length > 0;
    const cardStyle = backgroundImage
        ? { backgroundImage: `url(${backgroundImage})` }
        : undefined;

    return (
        <a href={buttonHref}>
            <div className="serviceCard" style={cardStyle}>
                <div className="serviceHeader">
                    <h3>{title}</h3>
                    {hasItems && (
                        <div className="serviceList">
                            {items.map((item, index) => (
                                <React.Fragment key={`${item}-${index}`}>
                                    <h4>{item}</h4>
                                    {index < items.length - 1 && (
                                        <span className="serviceListDot" aria-hidden="true" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    )}
                </div>
                <Button className="serviceButton">
                    {buttonLabel}
                </Button>
            </div>
        </a>
    );
};

export default ServiceCard;
