"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@heroui/react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import Dots from "../Dots";

const ServiceSolutions = ({ title, items }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 768px)").matches;
  }, []);

  const openDrawer = (item) => {
    setActiveItem(item);
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const modal = activeItem?.modal || {};
  const why = modal.why || activeItem?.body;
  const who = modal.who || [];
  const benefits = modal.benefits || [];
  const cta = modal.cta || "Получить консультацию";
  const waTitle = activeItem?.title || "услугой";
  const waText = encodeURIComponent(
    `Здравствуйте, хочу поинтересоваться услугой: ${waTitle}.`
  );
  const waHref = `https://wa.me/77066675818?text=${waText}`;

  return (
    <section className="serviceSolutions">
      <div className="sectionTitle">
        <Dots />
        <h3>{title}</h3>
      </div>
      <div className="serviceSolutionsGrid">
        {items.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="serviceSolutionsCard"
            onClick={() => openDrawer(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                openDrawer(item);
              }
            }}
          >
            <div className="serviceSolutionsCardContent">
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
            <Button className="serviceSolutionsCardButton" type="button" onClick={() => openDrawer(item)}>
              Узнать подробнее
            </Button>
          </article>
        ))}
      </div>
      <Drawer
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        placement={isMobile ? "bottom" : "right"}
        classNames={{ backdrop: "serviceDrawerBackdrop" }}
        hideCloseButton
      >
        <DrawerContent className="serviceDrawerContent">
          {(onClose) => (
            <>
              <DrawerHeader className="serviceDrawerHeader">
                <div className="serviceDrawerHeaderBlock">
                  <h4>{activeItem?.title}</h4>
                  <Button isIconOnly  className="serviceDrawerClose" type="button" onClick={onClose}>
                    <img src="/close.png" alt="" />
                  </Button>
                </div>
              </DrawerHeader>
              <DrawerBody className="serviceDrawerBody">
                <div className="serviceDrawerSection">
                  <span>Почему важно:</span>
                  <p>{why}</p>
                </div>
                {who.length > 0 && (
                  <div className="serviceDrawerSection">
                    <span>Для кого подходит:</span>
                    <div className="serviceDrawerTags">
                      {who.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
                {benefits.length > 0 && (
                  <div className="serviceDrawerSection">
                    <span>Плюсы для бизнеса:</span>
                    <div className="serviceDrawerTags">
                      {benefits.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </DrawerBody>
              <DrawerFooter className="serviceDrawerFooter">
                <Button
                  as="a"
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="serviceDrawerCta"
                  onPress={onClose}
                >
                  {cta}
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default ServiceSolutions;
