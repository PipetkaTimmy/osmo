"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
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
    const [isPinned, setIsPinned] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsPinned(window.scrollY > 80);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav className={`navDock ${isPinned ? "navDock--top" : "navDock--bottom"}`}>
            <Button isIconOnly className="wpBtn">
                <img src="/contacts/wp.png" alt="" />
            </Button>
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
            <Button isIconOnly className="callBtn">
                <img src="/contacts/call.png" alt="" />
            </Button>
        </nav>
    );
};

export default Navbar;
