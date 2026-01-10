"use client";

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
  const pixiContainerRef = useRef(null);
  const pixiAppRef = useRef(null);
  const pixiStateRef = useRef({
    textures: [],
    currentIndex: 0,
    currentSprite: null,
    nextSprite: null,
    displacementFilter: null,
    displacementSprite: null,
    imageContainer: null,
    fitSprite: null,
    isTransitioning: false,
  });

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
    let isMounted = true;
    let cleanupResize = null;

    const initPixi = async () => {
      if (!pixiContainerRef.current) return;
      const pixi = await import("pixi.js");
      if (!isMounted) return;

      const app = new pixi.Application();
      await app.init({
        backgroundAlpha: 0,
        antialias: true,
      });
      app.ticker.start();
      pixiAppRef.current = app;
      pixiContainerRef.current.innerHTML = "";
      pixiContainerRef.current.appendChild(app.canvas);
      app.canvas.style.width = "100%";
      app.canvas.style.height = "100%";
      app.canvas.style.display = "block";

      const loadedTextures = await Promise.all(
        items.map(async (item) => {
          try {
            return await pixi.Assets.load(item.image);
          } catch {
            return null;
          }
        })
      );
      if (!isMounted) return;
      const textures = loadedTextures.map(
        (texture) => texture || pixi.Texture.EMPTY
      );

      const displacementSprite = new pixi.Sprite(textures[0]);
      displacementSprite.alpha = 0.001;
      displacementSprite.width = app.screen.width;
      displacementSprite.height = app.screen.height;
      const displacementFilter = new pixi.DisplacementFilter(displacementSprite);
      displacementFilter.scale.set(0, 0);
      const imageContainer = new pixi.Container();
      imageContainer.filters = [displacementFilter];
      app.stage.addChild(displacementSprite);
      app.stage.addChild(imageContainer);

      const currentSprite = new pixi.Sprite(textures[0]);
      const nextSprite = new pixi.Sprite(textures[0]);
      nextSprite.alpha = 0;
      imageContainer.addChild(currentSprite);
      imageContainer.addChild(nextSprite);

      const fitSprite = (sprite) => {
        if (!sprite.texture?.width || !sprite.texture?.height) return;
        const scale = Math.max(
          app.screen.width / sprite.texture.width,
          app.screen.height / sprite.texture.height
        );
        sprite.width = sprite.texture.width * scale;
        sprite.height = sprite.texture.height * scale;
        sprite.x = (app.screen.width - sprite.width) / 2;
        sprite.y = (app.screen.height - sprite.height) / 2;
      };

      const resizeAll = () => {
        const width = pixiContainerRef.current?.clientWidth || 0;
        const height = pixiContainerRef.current?.clientHeight || 0;
        if (!width || !height) return;
        app.renderer.resize(width, height);
        displacementSprite.width = app.screen.width;
        displacementSprite.height = app.screen.height;
        fitSprite(currentSprite);
        fitSprite(nextSprite);
        fitSprite(displacementSprite);
        app.render();
      };

      resizeAll();
      fitSprite(currentSprite);
      const onResize = () => resizeAll();
      const resizeObserver = new ResizeObserver(onResize);
      resizeObserver.observe(pixiContainerRef.current);
      cleanupResize = () => {
        resizeObserver.disconnect();
        window.removeEventListener("resize", onResize);
      };

      pixiStateRef.current = {
        textures,
        currentIndex: 0,
        currentSprite,
        nextSprite,
        displacementFilter,
        displacementSprite,
        imageContainer,
        fitSprite,
        isTransitioning: false,
      };

      app.render();
    };

    initPixi();

    return () => {
      isMounted = false;
      if (cleanupResize) cleanupResize();
      if (pixiAppRef.current) {
        pixiAppRef.current.destroy(true);
        pixiAppRef.current = null;
      }
    };
  }, [items]);

  useEffect(() => {
    const app = pixiAppRef.current;
    const state = pixiStateRef.current;
    if (!app || !state.textures.length) return;
    if (activeIndex === state.currentIndex) return;
    if (activeIndex >= state.textures.length) return;

    const {
      currentSprite,
      nextSprite,
      displacementFilter,
      displacementSprite,
      textures,
      fitSprite,
    } = state;

    if (state.isTransitioning) return;
    state.isTransitioning = true;
    const nextTexture = textures[activeIndex];
    if (!nextTexture?.width || !nextTexture?.height) {
      state.currentIndex = activeIndex;
      return;
    }
    nextSprite.texture = nextTexture;
    if (fitSprite) {
      fitSprite(nextSprite);
    }
    displacementSprite.texture = nextTexture;
    if (fitSprite) {
      fitSprite(displacementSprite);
    }
    nextSprite.alpha = 0;
    displacementFilter.scale.set(0, 0);

    const duration = 0.7;
    const maxScale = 480;
    let elapsed = 0;

    const tick = () => {
      elapsed += app.ticker.deltaMS / 1000;
      const ease = (t) => t * t * (3 - 2 * t); // smoothstep
      const progress = ease(Math.min(elapsed / duration, 1));
      const wave = Math.sin(progress * Math.PI);
      displacementFilter.scale.set(wave * maxScale, wave * maxScale);
      currentSprite.alpha = 1 - progress;
      nextSprite.alpha = progress;

      if (progress >= 1) {
        currentSprite.texture = textures[activeIndex];
        if (fitSprite) {
          fitSprite(currentSprite);
        }
        currentSprite.alpha = 1;
        nextSprite.alpha = 0;
        displacementFilter.scale.set(0, 0);
        state.currentIndex = activeIndex;
        state.isTransitioning = false;
        app.ticker.remove(tick);
      }
    };

    app.ticker.add(tick);
  }, [activeIndex]);

  return (
    <div className="container">
      <div className="sectionTitle">
        <Dots />
        <h3>Почему бизнесу выгодно работать с ::osma::</h3>
      </div>
      <div className="offersContainer">
        <div className="offersSticky">
          <div className="offersMedia">
            <div className="offersCanvas" ref={pixiContainerRef} />
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
