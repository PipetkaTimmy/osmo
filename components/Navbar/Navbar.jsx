"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@heroui/react";

const Navbar = () => {
  const sections = useMemo(
    () => [
      { id: "hero", label: "Главная" },
      { id: "services", label: "Услуги" },
      { id: "offers", label: "Преимущества" },
      { id: "cases", label: "Кейсы" },
      { id: "contacts", label: "Контакты" },
    ],
    []
  );
  const [activeId, setActiveId] = useState(sections[0].id);
  const pendingIdRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const offset = 120;
    let rafId = null;

    const updateActive = () => {
      const scrollPosition = window.scrollY + offset;
      const pendingId = pendingIdRef.current;
      if (pendingId) {
        const pendingEl = document.getElementById(pendingId);
        if (!pendingEl) {
          pendingIdRef.current = null;
        } else if (scrollPosition < pendingEl.offsetTop - 1) {
          setActiveId(pendingId);
          rafId = null;
          return;
        } else {
          pendingIdRef.current = null;
        }
      }
      let currentId = sections[0]?.id;

      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          currentId = id;
        }
      });

      if (currentId) {
        setActiveId(currentId);
      }
      rafId = null;
    };

    const onScroll = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [sections]);

  const handleClick = (id) => (event) => {
    event.preventDefault();
    setActiveId(id);
    pendingIdRef.current = id;
    setIsMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
    return undefined;
  }, [isMenuOpen]);

  useEffect(() => {
    const footer = document.querySelector(".footerContainer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className={`navDock navDock--bottom ${isFooterVisible ? "is-hidden" : ""}`}>
        <motion.div
          className="navDockSide navDockSide--left"
          animate={
            isFooterVisible
              ? { x: -120, y: 40, opacity: 0 }
              : { x: 0, y: 0, opacity: 1 }
          }
          transition={{ type: "spring", stiffness: 220, damping: 24 }}
        >
          <Button isIconOnly className="wpBtn">
            <Image src="/contacts/wp.png" alt="WhatsApp" width={24} height={24} />
          </Button>
        </motion.div>
        <motion.div
          className="navDockCenter"
          animate={
            isFooterVisible
              ? { y: 30, opacity: 0, scale: 0.96 }
              : { y: 0, opacity: 1, scale: 1 }
          }
          transition={{ type: "spring", stiffness: 220, damping: 24 }}
        >
          <ul className="navDockList">
            {sections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <li key={section.id} className="navDockItem">
                  <a
                    className={`navDockLink ${isActive ? "is-active" : ""}`}
                    href={`#${section.id}`}
                    onClick={handleClick(section.id)}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="navDockPill"
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                      />
                    )}
                    <span className="navDockText">{section.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="navMobDockList">
            <Button
              className="navDockMenuButton"
              onPress={() => setIsMenuOpen((open) => !open)}
              type="button"
            >
              Меню
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="navDockSide navDockSide--right"
          animate={
            isFooterVisible
              ? { x: 120, y: 40, opacity: 0 }
              : { x: 0, y: 0, opacity: 1 }
          }
          transition={{ type: "spring", stiffness: 220, damping: 24 }}
        >
          <Button isIconOnly className="callBtn">
            <Image src="/contacts/call.png" alt="Позвонить" width={24} height={24} />
          </Button>
        </motion.div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="navOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="navOverlayPanel"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <div className="navOverlayHeader">
                <span>Навигация</span>
                <button
                  className="navOverlayClose"
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Закрыть
                </button>
              </div>
              <ul className="navOverlayList">
                {sections.map((section) => (
                  <li key={section.id} className="navOverlayItem">
                    <a
                      className="navOverlayLink"
                      href={`#${section.id}`}
                      onClick={handleClick(section.id)}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
