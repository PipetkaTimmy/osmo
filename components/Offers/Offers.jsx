import React, { useEffect, useMemo, useRef, useState } from "react";
import Dots from "../Dots";

const Offers = () => {
  const items = useMemo(
    () => [
      {
        title: "Результат",
        body: "Создаём инструменты, которые приносят прибыль и увеличивают конверсию.",
        image: "/offers/offer-1.png",
      },
      {
        title: "Скорость",
        body: "От идеи до запуска за 14 дней без лишних задержек.",
        image: "/offers/offer-2.png",
      },
      {
        title: "Поддержка",
        body: "Не бросаем продукт после релиза — развиваем и адаптируем под ваши задачи.",
        image: "/offers/offer-3.png",
      },
      {
        title: "Прозрачность",
        body: "Открытые коммуникации и честные сроки на каждом этапе.",
        image: "/offers/offer-4.png",
      },
    ],
    []
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const turbulenceAnimRef = useRef(null);
  const displacementAnimRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number(visible.target.dataset.index);
        if (!Number.isNaN(index)) {
          setActiveIndex(index);
        }
      },
      { threshold: [0.4, 0.6, 0.8], rootMargin: "-20% 0px -20% 0px" }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (turbulenceAnimRef.current?.beginElement) {
      turbulenceAnimRef.current.beginElement();
    }
    if (displacementAnimRef.current?.beginElement) {
      displacementAnimRef.current.beginElement();
    }
  }, [activeIndex]);

  return (
    <div className="container">
      <div className="sectionTitle">
        <Dots />
        <h3>Почему бизнесу выгодно работать с ::osma::</h3>
      </div>
      <div className="offersContainer">
        <div className="offersSticky">
          <div className="offersMedia" style={{ filter: "url(#glitch-filter)" }}>
            <svg className="offersFilter" aria-hidden="true">
              <defs>
                <filter id="glitch-filter">
                  <feTurbulence
                    type="turbulence"
                    baseFrequency="0.01 0.02"
                    numOctaves="2"
                    seed={activeIndex + 1}
                    result="noise"
                  >
                    <animate
                      attributeName="baseFrequency"
                      dur="0.7s"
                      values="0.01 0.02;0.18 0.24;0.01 0.02"
                      repeatCount="1"
                      begin="indefinite"
                      ref={turbulenceAnimRef}
                    />
                  </feTurbulence>
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="0"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  >
                    <animate
                      attributeName="scale"
                      dur="0.7s"
                      values="0;120;0"
                      repeatCount="1"
                      begin="indefinite"
                      ref={displacementAnimRef}
                    />
                  </feDisplacementMap>
                </filter>
              </defs>
            </svg>
            {items.map((item, index) => (
              <img
                key={`${item.image}-${index}`}
                className={`offersImage ${index === activeIndex ? "is-active" : ""
                  }`}
                src={item.image}
                alt={item.title}
              />
            ))}
          </div>
        </div>
        <div className="offersTrack">
          {items.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="offersItem"
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              data-index={index}
            >
              <div className="offersItemInner">
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
