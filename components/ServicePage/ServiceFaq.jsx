'use client'
import React from "react";
import Dots from "../Dots";
import { Accordion, AccordionItem } from "@heroui/react";

const ServiceFaq = ({ title, items }) => {
  const indicator = (
    <img
      src="/acrd.png"
      alt=""
      className="serviceFaqIndicator"
      aria-hidden="true"
    />
  );

  return (
    <section className="serviceFaq">
      <div className="sectionTitle">
        <Dots />
        <h3>{title}</h3>
      </div>
      <Accordion className="serviceFaqList" variant="splitted">
        {(items || []).map((item, index) => (
          <AccordionItem
            key={`${item.question}-${index}`}
            aria-label={item.question}
            title={item.question}
            indicator={indicator}
            className="serviceFaqItem"
          >
            <p>{item.answer}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default ServiceFaq;
