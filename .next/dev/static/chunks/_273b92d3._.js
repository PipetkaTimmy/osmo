(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Cases/CaseCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const defaultCaseImages = [
    "/cases/1/1.webp",
    "/cases/1/2.webp",
    "/cases/1/3.webp"
];
const CaseCard = ({ description, backgroundImage, headerItems, headerIcons, caseImages })=>{
    _s();
    const hasHeaderItems = Array.isArray(headerItems) && headerItems.length > 0;
    const hasIcons = Array.isArray(headerIcons) && headerIcons.length > 0;
    const images = caseImages?.length ? caseImages : defaultCaseImages;
    const initialIndex = Math.max(0, images.indexOf(backgroundImage));
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialIndex);
    const [isFading, setIsFading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCursorActive, setIsCursorActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fadeOutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fadeInRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursorFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentImage = images[currentIndex] || backgroundImage || images[0];
    const cardStyle = currentImage ? {
        "--case-bg": `url(${currentImage})`
    } : undefined;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CaseCard.useEffect": ()=>{
            return ({
                "CaseCard.useEffect": ()=>{
                    if (fadeOutRef.current) {
                        clearTimeout(fadeOutRef.current);
                    }
                    if (fadeInRef.current) {
                        clearTimeout(fadeInRef.current);
                    }
                    if (cursorFrameRef.current) {
                        cancelAnimationFrame(cursorFrameRef.current);
                    }
                }
            })["CaseCard.useEffect"];
        }
    }["CaseCard.useEffect"], []);
    const handleAdvance = ()=>{
        if (isFading || images.length === 0) {
            return;
        }
        setIsFading(true);
        fadeOutRef.current = setTimeout(()=>{
            setCurrentIndex((prev)=>(prev + 1) % images.length);
        }, 220);
        fadeInRef.current = setTimeout(()=>{
            setIsFading(false);
        }, 520);
    };
    const handleKeyDown = (event)=>{
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleAdvance();
        }
    };
    const handleMouseMove = (event)=>{
        if (cursorFrameRef.current) {
            return;
        }
        const { clientX, clientY } = event;
        cursorFrameRef.current = requestAnimationFrame(()=>{
            const card = cardRef.current;
            if (!card) {
                cursorFrameRef.current = null;
                return;
            }
            const rect = card.getBoundingClientRect();
            const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
            const y = Math.min(Math.max(clientY - rect.top, 0), rect.height);
            card.style.setProperty("--cursor-x", `${x}px`);
            card.style.setProperty("--cursor-y", `${y}px`);
            cursorFrameRef.current = null;
        });
    };
    const handleMouseEnter = (event)=>{
        setIsCursorActive(true);
        const card = cardRef.current;
        if (!card) {
            return;
        }
        const rect = card.getBoundingClientRect();
        const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
        const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);
        card.style.setProperty("--cursor-x", `${x}px`);
        card.style.setProperty("--cursor-y", `${y}px`);
    };
    const handleMouseLeave = ()=>setIsCursorActive(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `caseCard ${isCursorActive ? "is-cursor-active" : ""}`,
        style: cardStyle,
        role: "button",
        tabIndex: 0,
        ref: cardRef,
        onClick: handleAdvance,
        onKeyDown: handleKeyDown,
        onMouseMove: handleMouseMove,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `caseCardFade ${isFading ? "is-active" : ""}`,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/Cases/CaseCard.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "caseCardHover",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/cursor.png",
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/components/Cases/CaseCard.jsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Нажмите для просмотра"
                    }, void 0, false, {
                        fileName: "[project]/components/Cases/CaseCard.jsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Cases/CaseCard.jsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "caseCardHeader",
                children: hasHeaderItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "caseCardHeaderRow",
                    children: headerItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "caseCardHeaderItem",
                            children: [
                                hasIcons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: headerIcons[index % headerIcons.length],
                                    alt: "",
                                    width: 20,
                                    height: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/Cases/CaseCard.jsx",
                                    lineNumber: 121,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: item
                                }, void 0, false, {
                                    fileName: "[project]/components/Cases/CaseCard.jsx",
                                    lineNumber: 128,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, `${item}-${index}`, true, {
                            fileName: "[project]/components/Cases/CaseCard.jsx",
                            lineNumber: 119,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/Cases/CaseCard.jsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Cases/CaseCard.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: description
            }, void 0, false, {
                fileName: "[project]/components/Cases/CaseCard.jsx",
                lineNumber: 134,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Cases/CaseCard.jsx",
        lineNumber: 98,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CaseCard, "sLTPgXybZ0XueaGRDLAncU1QlEQ=");
_c = CaseCard;
const __TURBOPACK__default__export__ = CaseCard;
var _c;
__turbopack_context__.k.register(_c, "CaseCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Dots.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Dots = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "dots",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                fileName: "[project]/components/Dots.jsx",
                lineNumber: 6,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                fileName: "[project]/components/Dots.jsx",
                lineNumber: 7,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                fileName: "[project]/components/Dots.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                fileName: "[project]/components/Dots.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Dots.jsx",
        lineNumber: 5,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Dots;
const __TURBOPACK__default__export__ = Dots;
var _c;
__turbopack_context__.k.register(_c, "Dots");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Cases/Cases.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Cases$2f$CaseCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Cases/CaseCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dots$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Dots.jsx [app-client] (ecmascript)");
;
;
;
;
const defaultCases = [
    {
        description: "Сайт для маркетингово агенства Everest",
        backgroundImage: "/cases/1/1.webp",
        caseImages: [
            "/cases/1/1.webp",
            "/cases/1/2.webp",
            "/cases/1/3.webp"
        ],
        headerItems: [
            "Разработка сайта"
        ],
        headerIcons: [
            "/cases/R.png",
            "/cases/T.png",
            "/cases/K.png"
        ]
    },
    {
        description: "Разработка сайта для анти-кафе EZHUB",
        backgroundImage: "/cases/2/1.webp",
        caseImages: [
            "/cases/2/1.webp",
            "/cases/2/2.webp",
            "/cases/2/3.webp"
        ],
        headerItems: [
            "Разработка сайта"
        ],
        headerIcons: [
            "/cases/R.png",
            "/cases/T.png",
            "/cases/K.png"
        ]
    },
    {
        description: "Разработка интернет магазина Aura Vessels",
        backgroundImage: "/cases/3/1.webp",
        caseImages: [
            "/cases/3/1.webp",
            "/cases/3/2.webp"
        ],
        headerItems: [
            "Разработка сайта"
        ],
        headerIcons: [
            "/cases/R.png",
            "/cases/T.png",
            "/cases/K.png"
        ]
    },
    {
        description: "Сервис поиска заведений Urban",
        backgroundImage: "/cases/4/1.webp",
        caseImages: [
            "/cases/4/1.webp",
            "/cases/4/2.webp",
            "/cases/4/3.webp"
        ],
        headerItems: [
            "Мобильная разработка"
        ],
        headerIcons: [
            "/cases/R.png",
            "/cases/T.png",
            "/cases/K.png"
        ]
    }
];
const Cases = ({ casesList = defaultCases })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sectionTitle",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dots$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/Cases/Cases.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Наши кейсы"
                    }, void 0, false, {
                        fileName: "[project]/components/Cases/Cases.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Cases/Cases.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "casesContainer",
                children: casesList.map((caseItem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Cases$2f$CaseCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...caseItem
                    }, `${caseItem.title}-${index}`, false, {
                        fileName: "[project]/components/Cases/Cases.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/Cases/Cases.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Cases/Cases.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Cases;
const __TURBOPACK__default__export__ = Cases;
var _c;
__turbopack_context__.k.register(_c, "Cases");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Contacts/Contacts.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/button/dist/chunk-WBUKVQRU.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$SQIAVXJX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/input/dist/chunk-SQIAVXJX.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$WEIB4WXA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__textarea_default__as__Textarea$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/input/dist/chunk-WEIB4WXA.mjs [app-client] (ecmascript) <export textarea_default as Textarea>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dots$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Dots.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const formatPhone = (digits)=>{
    const clean = digits.slice(0, 10);
    if (!clean.length) return "";
    let out = "(" + clean.slice(0, 3);
    if (clean.length < 3) return out;
    out += ")";
    if (clean.length > 3) {
        out += " " + clean.slice(3, 6);
    }
    if (clean.length > 6) {
        out += "-" + clean.slice(6, 8);
    }
    if (clean.length > 8) {
        out += "-" + clean.slice(8, 10);
    }
    return out;
};
const normalizePhone = (value)=>{
    let digits = value.replace(/\D/g, "");
    if (digits.startsWith("7") && digits.length > 10) {
        digits = digits.slice(1);
    }
    if (digits.startsWith("8") && digits.length > 10) {
        digits = digits.slice(1);
    }
    return digits.slice(0, 10);
};
const Contacts = ()=>{
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const phoneValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Contacts.useMemo[phoneValue]": ()=>formatPhone(form.phone)
    }["Contacts.useMemo[phoneValue]"], [
        form.phone
    ]);
    const phoneInputRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const handleChange = (field)=>(event)=>{
            setForm((prev)=>({
                    ...prev,
                    [field]: event.target.value
                }));
        };
    const handlePhoneChange = (event)=>{
        const digits = normalizePhone(event.target.value);
        setForm((prev)=>({
                ...prev,
                phone: digits
            }));
    };
    const handlePhoneKeyDown = (event)=>{
        if (event.key !== "Backspace") return;
        const input = phoneInputRef.current;
        if (!input) return;
        const { selectionStart, selectionEnd, value } = input;
        if (selectionStart !== selectionEnd) return;
        if (selectionStart === 0) return;
        const prevChar = value[selectionStart - 1];
        if (/\d/.test(prevChar)) return;
        event.preventDefault();
        setForm((prev)=>({
                ...prev,
                phone: prev.phone.slice(0, -1)
            }));
    };
    const validate = ()=>{
        if (!form.name.trim()) return "Имя обязательно";
        if (!form.message.trim()) return "Сообщение обязательно";
        if (form.phone.length !== 10) return "Номер телефона обязателен";
        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            return "Электронная почта недействительна";
        }
        return "";
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const validationError = validate();
        if (validationError) {
            setError(validationError);
            setStatus("error");
            return;
        }
        setError("");
        setStatus("loading");
        const payload = {
            name: form.name,
            company: form.company,
            phone: `+7${form.phone}`,
            email: form.email,
            message: form.message
        };
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error("Запрос не удался");
            }
            setStatus("success");
            setForm({
                name: "",
                company: "",
                phone: "",
                email: "",
                message: ""
            });
        } catch (err) {
            setError("Сервер не доступен, попробуйте позже");
            setStatus("error");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contacts.useEffect": ()=>{
            if (status !== "success") return;
            const timer = setTimeout({
                "Contacts.useEffect.timer": ()=>{
                    setStatus("idle");
                }
            }["Contacts.useEffect.timer"], 5000);
            return ({
                "Contacts.useEffect": ()=>clearTimeout(timer)
            })["Contacts.useEffect"];
        }
    }["Contacts.useEffect"], [
        status
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sectionTitle",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dots$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/Contacts/Contacts.jsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Контакты"
                    }, void 0, false, {
                        fileName: "[project]/components/Contacts/Contacts.jsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Contacts/Contacts.jsx",
                lineNumber: 131,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "contactsContainer",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "userInputs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "textArea",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$WEIB4WXA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__textarea_default__as__Textarea$3e$__["Textarea"], {
                                    placeholder: "Опишите свой проект",
                                    value: form.message,
                                    onChange: handleChange("message"),
                                    maxRows: 15,
                                    classNames: {
                                        base: "contactTextarea",
                                        inputWrapper: "contactTextareaWrapper",
                                        input: "contactTextareaInner"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Contacts/Contacts.jsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Contacts/Contacts.jsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "userData",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$SQIAVXJX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                        label: "Имя*",
                                        type: "text",
                                        value: form.name,
                                        onChange: handleChange("name"),
                                        classNames: {
                                            base: "contactInput",
                                            inputWrapper: "contactInputWrapper",
                                            input: "contactInputInner"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contacts/Contacts.jsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$SQIAVXJX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                        label: "Компания*",
                                        type: "text",
                                        value: form.company,
                                        onChange: handleChange("company"),
                                        classNames: {
                                            base: "contactInput",
                                            inputWrapper: "contactInputWrapper",
                                            input: "contactInputInner"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contacts/Contacts.jsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$SQIAVXJX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                        label: "Номер телефона*",
                                        type: "tel",
                                        inputMode: "numeric",
                                        value: phoneValue,
                                        onChange: handlePhoneChange,
                                        onKeyDown: handlePhoneKeyDown,
                                        ref: phoneInputRef,
                                        startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "contactPhonePrefix",
                                            children: "+7"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contacts/Contacts.jsx",
                                            lineNumber: 181,
                                            columnNumber: 29
                                        }, void 0),
                                        classNames: {
                                            base: "contactInput",
                                            inputWrapper: "contactInputWrapper",
                                            input: "contactInputInner"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contacts/Contacts.jsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$input$2f$dist$2f$chunk$2d$SQIAVXJX$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                        label: "Эл.почта",
                                        type: "email",
                                        value: form.email,
                                        onChange: handleChange("email"),
                                        classNames: {
                                            base: "contactInput",
                                            inputWrapper: "contactInputWrapper",
                                            input: "contactInputInner"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contacts/Contacts.jsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Contacts/Contacts.jsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Contacts/Contacts.jsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contactActions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                className: "submitBtn",
                                type: "submit",
                                isDisabled: status === "loading",
                                children: status === "loading" ? "Отправка..." : "Отправить"
                            }, void 0, false, {
                                fileName: "[project]/components/Contacts/Contacts.jsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "contactError",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/components/Contacts/Contacts.jsx",
                                lineNumber: 205,
                                columnNumber: 34
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Contacts/Contacts.jsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Contacts/Contacts.jsx",
                lineNumber: 135,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `contactToast ${status === "success" ? "is-visible" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contactToastGlow"
                    }, void 0, false, {
                        fileName: "[project]/components/Contacts/Contacts.jsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contactToastContent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "contactToastTitle",
                                children: "Спасибо!"
                            }, void 0, false, {
                                fileName: "[project]/components/Contacts/Contacts.jsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Скоро мы с вами свяжемся."
                            }, void 0, false, {
                                fileName: "[project]/components/Contacts/Contacts.jsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Contacts/Contacts.jsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Contacts/Contacts.jsx",
                lineNumber: 208,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Contacts/Contacts.jsx",
        lineNumber: 130,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Contacts, "zEXHEsW6uGj608YTyR1vq3/m5/E=");
_c = Contacts;
const __TURBOPACK__default__export__ = Contacts;
var _c;
__turbopack_context__.k.register(_c, "Contacts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "footerContainer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/biglogo.png",
                alt: "OSMO",
                width: 160,
                height: 48
            }, void 0, false, {
                fileName: "[project]/components/Footer/Footer.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "© 2025. osmo"
            }, void 0, false, {
                fileName: "[project]/components/Footer/Footer.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer/Footer.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dots$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Dots.jsx [app-client] (ecmascript)");
;
;
;
;
const Hero = ({ title, subtitle, videoSrc, poster })=>{
    const resolvedTitle = title ?? "Сайты и реклама";
    const resolvedSubtitle = subtitle ?? "Увеличиваем конверсии, продажи и трафик.";
    const resolvedVideoSrc = videoSrc ?? "/hero/cubes.mp4";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "heroContainer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "logo",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/logo.png",
                    alt: "OSMO",
                    width: 120,
                    height: 40,
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/components/Hero/Hero.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Hero/Hero.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                className: "heroVideo",
                src: resolvedVideoSrc,
                poster: poster,
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true
            }, void 0, false, {
                fileName: "[project]/components/Hero/Hero.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heroMainText",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "heroTitle",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dots$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/Hero/Hero.jsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "heroGlitch",
                                "data-text": resolvedTitle,
                                children: resolvedTitle
                            }, void 0, false, {
                                fileName: "[project]/components/Hero/Hero.jsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dots$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/Hero/Hero.jsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero/Hero.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: resolvedSubtitle
                    }, void 0, false, {
                        fileName: "[project]/components/Hero/Hero.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero/Hero.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero/Hero.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/services.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultServices",
    ()=>defaultServices,
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "servicesData",
    ()=>servicesData
]);
const servicesData = [
    {
        slug: "websites",
        hero: {
            title: "Сайты для продаж",
            subtitle: "Разработка сайтов для продаж под задачи бизнеса",
            videoSrc: "/hero/websites.mp4"
        },
        title: "Сайты любой сложности",
        items: [
            "Одностраничные сайты",
            "Корпоративные сайты",
            "Интернет-магазины"
        ],
        buttonLabel: "Подробнее об услуге",
        buttonHref: "/services/websites",
        backgroundImage: "/services/1.png",
        description: "Проектируем и запускаем сайты, которые продают: от лендингов до корпоративных порталов.",
        intro: {
            title: "Разработка сайтов для продаж под задачи бизнеса",
            body: "Занимаемся разработкой сайтов для продаж: лендингов и интернет-магазинов для компаний из разных сфер. Проектируем структуру, продумываем пользовательские сценарии и создаём дизайн, который помогает посетителю быстро перейти к целевому действию. Такие сайты подходят для привлечения клиентов, запуска рекламы и масштабирования продаж в онлайне.",
            footerTitle: "Как мы работаем",
            footerBody: "Работаем от задачи бизнеса: анализируем аудиторию, проектируем структуру и продумываем сценарии взаимодействия. Учитываем требования поисковых систем и дальнейшее продвижение, чтобы сайт для продаж стабильно привлекал целевой трафик и приводил к заявкам."
        },
        solutions: {
            title: "Виды решений",
            items: [
                {
                    title: "Лендинги",
                    body: "Одностраничные сайты для привлечения заявок и запуска рекламы.",
                    modal: {
                        why: "Один понятный путь для пользователя и быстрые заявки. Без продуманного лендинга потенциальные клиенты уходят, не дождавшись предложения.",
                        who: [
                            "Кто продаёт услуги или один продукт",
                            "Кому нужны заявки",
                            "Кто запускает рекламу"
                        ],
                        benefits: [
                            "Быстрый запуск продукта",
                            "Прямой канал заявок",
                            "Тестирование спроса без больших затрат"
                        ],
                        cta: "Получить консультацию"
                    }
                },
                {
                    title: "Интернет-магазины",
                    body: "Сайты для онлайн-продаж с каталогом и оформлением заказа.",
                    modal: {
                        why: "Удобная структура и каталог позволяют клиенту находить и покупать быстро. Без этого процесс покупки замедляется, а продажи теряются.",
                        who: [
                            "Кто продаёт товары онлайн",
                            "Кому нужна оплата на сайте",
                            "Кто хочет обрабатывать заказы через сайт"
                        ],
                        benefits: [
                            "Увеличение онлайн-продаж",
                            "Контроль каталога и заказов",
                            "Масштабируемый инструмент продаж"
                        ],
                        cta: "Получить консультацию"
                    }
                },
                {
                    title: "Каталоги",
                    body: "Сайты для презентации товаров или услуг и сбора заявок.",
                    modal: {
                        why: "Удобная структура и каталог позволяют клиенту находить и покупать быстро. Без этого процесс покупки замедляется, а продажи теряются.",
                        who: [
                            "У кого большой ассортимент",
                            "Кто продаёт корпоративным клиентам",
                            "Кому важно показать весь выбор"
                        ],
                        benefits: [
                            "Презентация полного ассортимента",
                            "Лёгкий доступ к информации для клиентов",
                            "Повышение доверия и репутации компании"
                        ],
                        cta: "Получить консультацию"
                    }
                }
            ]
        },
        faq: {
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Как понять, какой тип сайта мне нужен — лендинг, магазин или каталог?",
                    answer: "Если вы продаёте одну услугу или продукт и вам нужны заявки — подойдёт лендинг. Если продаёте товары и принимаете оплату на сайте — интернет-магазин. Если ассортимент большой, а продажи идут через менеджеров — лучше каталог. Мы помогаем определить формат на этапе обсуждения задачи."
                },
                {
                    question: "Можно ли доработать существующий сайт или нужно делать новый?",
                    answer: "Зависит от состояния сайта и задач бизнеса. Иногда достаточно переработать структуру и дизайн, в других случаях проще и эффективнее сделать новый сайт. Мы оцениваем это до начала работ и предлагаем оптимальный вариант."
                },
                {
                    question: "Будет ли сайт готов для рекламы и SEO?",
                    answer: "Да. Мы сразу закладываем корректную структуру, скорость загрузки и технические требования, чтобы сайт можно было использовать для рекламы и продвижения в поисковых системах без переделок."
                },
                {
                    question: "Сколько времени занимает разработка сайта?",
                    answer: "Сроки зависят от типа сайта и объёма задач. Лендинги делаются быстрее, интернет-магазины и каталоги — дольше из-за структуры и функциональности. Конкретные сроки обсуждаем после понимания задачи."
                },
                {
                    question: "Что происходит после запуска сайта?",
                    answer: "После запуска сайт можно развивать: добавлять страницы, функциональность, подключать аналитику и рекламу. Мы остаёмся на связи и можем сопровождать проект дальше."
                }
            ]
        }
    },
    {
        slug: "ecommerce",
        hero: {
            title: "Корпоративные сайты и сервисы",
            subtitle: "Проектируем цифровые решения для компаний, команд и процессов.",
            videoSrc: "/hero/ecommerce.mp4"
        },
        title: "Интернет-магазины под ключ",
        items: [
            "Каталог и корзина",
            "Онлайн-оплата"
        ],
        buttonLabel: "Подробнее об услуге",
        buttonHref: "/services/ecommerce",
        backgroundImage: "/services/2.png",
        description: "Разрабатываем e-commerce с удобной навигацией, интеграциями и продуманной конверсией.",
        intro: {
            title: "Разработка корпоративных сайтов и сервисов под задачи компании",
            body: "Мы занимаемся разработкой корпоративных сайтов и сервисов для бизнеса. Проектируем структуру, которая отражает логику компании, упрощает навигацию и помогает пользователям быстро находить нужную информацию. Такие решения подходят для представления компании, работы с клиентами, партнёрами и внутренними командами.",
            footerTitle: "Как мы работаем",
            footerBody: "Работаем от целей компании и бизнес-процессов. Анализируем структуру, роли пользователей и сценарии взаимодействия, чтобы корпоративный сайт или сервис был понятным, устойчивым к росту и удобным в поддержке. Учитываем требования безопасности, масштабирования и дальнейшего развития."
        },
        solutions: {
            title: "Виды решений",
            items: [
                {
                    title: "Корпоративные сайты",
                    body: "Сайты для представления компании, услуг и экспертизы.",
                    modal: {
                        why: "Корпоративный сайт формирует первое впечатление о компании и помогает пользователям быстро понять, чем вы занимаетесь и как с вами работать. Без понятной структуры информация теряется, а доверие к компании снижается.",
                        who: [
                            "Кто представляет компанию в онлайне",
                            "Кто работает с клиентами и партнёрами",
                            "Кому важны доверие и понятная подача."
                        ],
                        benefits: [
                            "Быстрый запуск продукта",
                            "Прямой канал заявок",
                            "Тестирование спроса без больших затрат"
                        ],
                        cta: "Получить консультацию"
                    }
                },
                {
                    title: "Порталы",
                    body: "Сервисы и платформы для работы с данными, пользователями и процессами.",
                    modal: {
                        why: "Порталы упрощают работу с данными, пользователями и процессами. Они помогают автоматизировать взаимодействие внутри компании и с внешними пользователями, снижая ручную работу и ошибки.",
                        who: [
                            "У кого сложные процессы",
                            "Для команд и организаций",
                            "Для работы с пользователями"
                        ],
                        benefits: [
                            "Оптимизация процессов и времени",
                            "Централизованный доступ к данным",
                            "Масштабирование и развитие сервиса"
                        ],
                        cta: "Получить консультацию"
                    }
                }
            ]
        },
        faq: {
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Как понять, нужен корпоративный сайт или портал?",
                    answer: "Корпоративный сайт подходит для представления компании и информации. Портал — когда нужно работать с пользователями, данными или процессами. Мы помогаем определить формат на старте проекта."
                },
                {
                    question: "Можно ли разработать корпоративный сервис поэтапно?",
                    answer: "Да. Часто начинаем с базовой версии, а затем постепенно расширяем функциональность по мере роста задач."
                },
                {
                    question: "Подходит ли такое решение для крупных компаний?",
                    answer: "Да. Мы проектируем корпоративные сайты и порталы с учётом масштабирования, ролей пользователей и сложной структуры."
                },
                {
                    question: "Что происходит после запуска?",
                    answer: "Проект можно развивать, дорабатывать и адаптировать под новые задачи. Мы можем сопровождать проект после запуска."
                }
            ]
        }
    },
    {
        slug: "marketing",
        hero: {
            title: "Цифровые продукты",
            subtitle: "Создаём мобильные приложения и веб-продукты для бизнеса и пользователей.",
            videoSrc: "/hero/marketing.mp4"
        },
        title: "Продвижение и реклама",
        items: [
            "Контекстная реклама",
            "SEO и SMM"
        ],
        buttonLabel: "Подробнее об услуге",
        buttonHref: "/services/marketing",
        backgroundImage: "/services/3.png",
        description: "Запускаем рекламные кампании и растим органический трафик, чтобы вы получали лиды.",
        intro: {
            title: "Разработка цифровых продуктов под задачи бизнеса",
            body: "Мы проектируем мобильные приложения и веб-продукты для компаний, команд и клиентов. Создаём интерфейсы и функционал, который решает реальные задачи бизнеса, упрощает работу пользователей и помогает продукту масштабироваться.",
            footerTitle: "Как мы работаем",
            footerBody: "Работаем от целей бизнеса и поведения пользователей. Анализируем сценарии, проектируем UX и интерфейсы, учитываем технические требования и дальнейшее развитие. Цифровой продукт сразу готов к использованию, продвижению и масштабированию."
        },
        solutions: {
            title: "Виды решений",
            items: [
                {
                    title: "Мобильные приложения",
                    body: "Приложения для iOS и Android для пользователей и сотрудников.",
                    modal: {
                        why: "Мобильное приложение позволяет пользователям взаимодействовать с продуктом или услугой в любое время и с любого устройства. Без удобного приложения пользователь может уйти к конкурентам.",
                        who: [
                            "Кто хочет расширить доступность услуг",
                            "Работа с клиентами через мобильные",
                            "Для команд и сотрудников внутри компании"
                        ],
                        benefits: [
                            "Рост вовлечения и удержания",
                            "Доступность сервиса 24/7",
                            "Возможность push-уведомлений и аналитики"
                        ],
                        cta: "Получить консультацию"
                    }
                },
                {
                    title: "Веб-продукты",
                    body: "Веб-приложения и платформы для автоматизации, сервиса и взаимодействия.",
                    modal: {
                        why: "Веб-продукт упрощает взаимодействие с пользователями, автоматизирует процессы и собирает данные для анализа. Без него компании тратят время на ручные операции и теряют эффективность.",
                        who: [
                            "Кто управляет процессами онлайн",
                            "Для команд и корпоративных клиентов"
                        ],
                        benefits: [
                            "Автоматизация процессов",
                            "Экономия времени",
                            "Централизованный доступ и контроль",
                            "Масштабируемость и гибкость продукта"
                        ],
                        cta: "Получить консультацию"
                    }
                }
            ]
        },
        faq: {
            title: "Часто задаваемые вопросы",
            items: [
                {
                    question: "Как понять, нужен мобильный продукт или веб-продукт?",
                    answer: "Мобильное приложение подходит, если пользователи работают с сервисом на телефоне и важно удержание через мобильные уведомления. Веб-продукт — если нужны сложные функции, работа через браузер и доступ для команд."
                },
                {
                    question: "Можно ли развивать продукт поэтапно?",
                    answer: "Да. Часто стартуем с базовой версии, а затем добавляем функционал и интеграции."
                },
                {
                    question: "Подходит ли для команды или корпоративных клиентов?",
                    answer: "Да. Мы проектируем продукты с учётом ролей пользователей, уровней доступа и командной работы."
                },
                {
                    question: "Что происходит после запуска?",
                    answer: "Продукт можно дорабатывать, масштабировать, подключать аналитику и сопровождение. Мы остаёмся на связи для поддержки."
                }
            ]
        }
    }
];
const defaultServices = servicesData;
const getServiceBySlug = (slug)=>{
    return servicesData.find((service)=>service.slug === slug);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$6TU24G5X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_default__as__Accordion$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/accordion/dist/chunk-6TU24G5X.mjs [app-client] (ecmascript) <export accordion_default as Accordion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/accordion/dist/chunk-HAJUSXOG.mjs [app-client] (ecmascript) <export accordion_item_base_default as AccordionItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/button/dist/chunk-WBUKVQRU.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$services$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/services.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Navbar = ({ sections: sectionsProp, serviceLinks: serviceLinksProp })=>{
    _s();
    const defaultSections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Navbar.useMemo[defaultSections]": ()=>[
                {
                    id: "hero",
                    label: "Главная"
                },
                {
                    id: "services",
                    label: "Услуги"
                },
                {
                    id: "offers",
                    label: "Преимущества"
                },
                {
                    id: "cases",
                    label: "Кейсы"
                },
                {
                    id: "contacts",
                    label: "Контакты"
                }
            ]
    }["Navbar.useMemo[defaultSections]"], []);
    const defaultServiceLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Navbar.useMemo[defaultServiceLinks]": ()=>(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$services$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultServices"] || []).map({
                "Navbar.useMemo[defaultServiceLinks]": (service)=>({
                        label: service.hero?.title || service.title || "Услуга",
                        href: service.buttonHref || `/services/${service.slug}`
                    })
            }["Navbar.useMemo[defaultServiceLinks]"])
    }["Navbar.useMemo[defaultServiceLinks]"], []);
    const sections = sectionsProp?.length ? sectionsProp : defaultSections;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const serviceLinks = serviceLinksProp?.length ? serviceLinksProp : defaultServiceLinks;
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sections[0].id);
    const pendingIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFooterVisible, setIsFooterVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const offset = 120;
            let rafId = null;
            const updateActive = {
                "Navbar.useEffect.updateActive": ()=>{
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
                    sections.forEach({
                        "Navbar.useEffect.updateActive": ({ id })=>{
                            const el = document.getElementById(id);
                            if (el && el.offsetTop <= scrollPosition) {
                                currentId = id;
                            }
                        }
                    }["Navbar.useEffect.updateActive"]);
                    if (currentId) {
                        setActiveId(currentId);
                    }
                    rafId = null;
                }
            }["Navbar.useEffect.updateActive"];
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>{
                    if (rafId) {
                        return;
                    }
                    rafId = window.requestAnimationFrame(updateActive);
                }
            }["Navbar.useEffect.onScroll"];
            updateActive();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            window.addEventListener("resize", onScroll);
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener("scroll", onScroll);
                    window.removeEventListener("resize", onScroll);
                    if (rafId) {
                        window.cancelAnimationFrame(rafId);
                    }
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        sections
    ]);
    const handleClick = (id)=>(event)=>{
            event.preventDefault();
            setActiveId(id);
            pendingIdRef.current = id;
            setIsMenuOpen(false);
            const target = document.getElementById(id);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (isMenuOpen) {
                document.body.style.overflow = "hidden";
                return ({
                    "Navbar.useEffect": ()=>{
                        document.body.style.overflow = "";
                    }
                })["Navbar.useEffect"];
            }
            document.body.style.overflow = "";
            return undefined;
        }
    }["Navbar.useEffect"], [
        isMenuOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const footer = document.querySelector(".footerContainer");
            if (!footer) return;
            const observer = new IntersectionObserver({
                "Navbar.useEffect": ([entry])=>{
                    setIsFooterVisible(entry.isIntersecting);
                }
            }["Navbar.useEffect"], {
                threshold: 0.2
            });
            observer.observe(footer);
            return ({
                "Navbar.useEffect": ()=>observer.disconnect()
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `navDock navDock--bottom ${isFooterVisible ? "is-hidden" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "navDockSide navDockSide--left",
                        animate: isFooterVisible ? {
                            x: -120,
                            y: 40,
                            opacity: 0
                        } : {
                            x: 0,
                            y: 0,
                            opacity: 1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 220,
                            damping: 24
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                            isIconOnly: true,
                            className: "wpBtn",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/contacts/wp.png",
                                alt: "WhatsApp",
                                width: 24,
                                height: 24
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar/Navbar.jsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar/Navbar.jsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "navDockCenter",
                        animate: isFooterVisible ? {
                            y: 30,
                            opacity: 0,
                            scale: 0.96
                        } : {
                            y: 0,
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 220,
                            damping: 24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "navDockList",
                                children: sections.map((section)=>{
                                    const isActive = section.id === activeId;
                                    if (section.id === "hero" && pathname !== "/") {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "navDockItem",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: `navDockLink ${isActive ? "is-active" : ""}`,
                                                href: "/",
                                                onClick: ()=>setIsMenuOpen(false),
                                                children: [
                                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        layoutId: "nav-pill",
                                                        className: "navDockPill",
                                                        transition: {
                                                            type: "spring",
                                                            stiffness: 500,
                                                            damping: 40
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar/Navbar.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "navDockText",
                                                        children: section.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar/Navbar.jsx",
                                                        lineNumber: 171,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                                lineNumber: 159,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, section.id, false, {
                                            fileName: "[project]/components/Navbar/Navbar.jsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0));
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "navDockItem",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: `navDockLink ${isActive ? "is-active" : ""}`,
                                            href: `#${section.id}`,
                                            onClick: handleClick(section.id),
                                            children: [
                                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    layoutId: "nav-pill",
                                                    className: "navDockPill",
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 500,
                                                        damping: 40
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar/Navbar.jsx",
                                                    lineNumber: 185,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "navDockText",
                                                    children: section.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar/Navbar.jsx",
                                                    lineNumber: 191,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar/Navbar.jsx",
                                            lineNumber: 179,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, section.id, false, {
                                        fileName: "[project]/components/Navbar/Navbar.jsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "navMobDockList",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                    className: `navDockMenuButton ${isMenuOpen ? "is-open" : ""}`,
                                    onPress: ()=>setIsMenuOpen((open)=>!open),
                                    type: "button",
                                    children: isMenuOpen ? "Закрыть" : "Меню"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar/Navbar.jsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar/Navbar.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "navDockSide navDockSide--right",
                        animate: isFooterVisible ? {
                            x: 120,
                            y: 40,
                            opacity: 0
                        } : {
                            x: 0,
                            y: 0,
                            opacity: 1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 220,
                            damping: 24
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                            isIconOnly: true,
                            className: "callBtn",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/contacts/call.png",
                                alt: "Позвонить",
                                width: 24,
                                height: 24
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar/Navbar.jsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar/Navbar.jsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar/Navbar.jsx",
                lineNumber: 130,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "navOverlay",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.25
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "navOverlayPanel",
                        initial: {
                            y: 40,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        exit: {
                            y: 40,
                            opacity: 0
                        },
                        transition: {
                            type: "spring",
                            stiffness: 260,
                            damping: 24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "navOverlayHeader",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Навигация"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar/Navbar.jsx",
                                    lineNumber: 238,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "navOverlayList",
                                children: sections.map((section)=>{
                                    if (section.id === "services") {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "navOverlayItem",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$6TU24G5X$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_default__as__Accordion$3e$__["Accordion"], {
                                                className: "navOverlayAccordion",
                                                variant: "splitted",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$accordion$2f$dist$2f$chunk$2d$HAJUSXOG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__accordion_item_base_default__as__AccordionItem$3e$__["AccordionItem"], {
                                                    "aria-label": "Услуги",
                                                    title: "Услуги",
                                                    indicator: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/acrd.png",
                                                        alt: "",
                                                        className: "navOverlayIndicator",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar/Navbar.jsx",
                                                        lineNumber: 250,
                                                        columnNumber: 31
                                                    }, void 0),
                                                    className: "navOverlayAccordionItem",
                                                    classNames: {
                                                        trigger: "navOverlayAccordionTrigger",
                                                        title: "navOverlayAccordionTitle",
                                                        content: "navOverlayAccordionContent"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "navOverlaySubList",
                                                        children: serviceLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                className: "navOverlayLink navOverlayServiceLink",
                                                                href: link.href,
                                                                onClick: ()=>setIsMenuOpen(false),
                                                                children: link.label
                                                            }, link.href, false, {
                                                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                                                lineNumber: 266,
                                                                columnNumber: 33
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar/Navbar.jsx",
                                                        lineNumber: 264,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar/Navbar.jsx",
                                                    lineNumber: 246,
                                                    columnNumber: 27
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                                lineNumber: 245,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, section.id, false, {
                                            fileName: "[project]/components/Navbar/Navbar.jsx",
                                            lineNumber: 244,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0));
                                    }
                                    if (section.id === "hero" && pathname !== "/") {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "navOverlayItem",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "navOverlayLink",
                                                href: "/",
                                                onClick: ()=>setIsMenuOpen(false),
                                                children: section.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                                lineNumber: 284,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, section.id, false, {
                                            fileName: "[project]/components/Navbar/Navbar.jsx",
                                            lineNumber: 283,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0));
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "navOverlayItem",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "navOverlayLink",
                                            href: `#${section.id}`,
                                            onClick: handleClick(section.id),
                                            children: section.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar/Navbar.jsx",
                                            lineNumber: 297,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, section.id, false, {
                                        fileName: "[project]/components/Navbar/Navbar.jsx",
                                        lineNumber: 296,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar/Navbar.jsx",
                                lineNumber: 240,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar/Navbar.jsx",
                        lineNumber: 230,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Navbar/Navbar.jsx",
                    lineNumber: 223,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Navbar/Navbar.jsx",
                lineNumber: 221,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Navbar, "PANuHDuYS8WJdrr0kzaU/SJYPtM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Offers/Offers.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dots$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Dots.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Offers = ()=>{
    _s();
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Offers.useMemo[items]": ()=>[
                {
                    title: "Результат",
                    body: "Создаём инструменты, которые приносят прибыль и увеличивают конверсию.",
                    image: "/offers/offer-1.webp"
                },
                {
                    title: "Скорость",
                    body: "От идеи до запуска за 14 дней без лишних задержек.",
                    image: "/offers/offer-2.webp"
                },
                {
                    title: "Поддержка",
                    body: "Не бросаем продукт после релиза — развиваем и адаптируем под ваши задачи.",
                    image: "/offers/offer-3.webp"
                },
                {
                    title: "Прозрачность",
                    body: "Открытые коммуникации и честные сроки на каждом этапе.",
                    image: "/offers/offer-4.webp"
                }
            ]
    }["Offers.useMemo[items]"], []);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const offersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isOffersVisible, setIsOffersVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pixiContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pixiAppRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pixiStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        textures: [],
        currentIndex: 0,
        currentSprite: null,
        nextSprite: null,
        displacementFilter: null,
        displacementSprite: null,
        imageContainer: null,
        fitSprite: null,
        isTransitioning: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Offers.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Offers.useEffect": (entries)=>{
                    const visible = entries.filter({
                        "Offers.useEffect": (entry)=>entry.isIntersecting
                    }["Offers.useEffect"]).sort({
                        "Offers.useEffect": (a, b)=>b.intersectionRatio - a.intersectionRatio
                    }["Offers.useEffect"])[0];
                    if (!visible) return;
                    const index = Number(visible.target.dataset.index);
                    if (!Number.isNaN(index)) {
                        setActiveIndex(index);
                    }
                }
            }["Offers.useEffect"], {
                threshold: [
                    0.4,
                    0.6,
                    0.8
                ],
                rootMargin: "-20% 0px -20% 0px"
            });
            itemRefs.current.forEach({
                "Offers.useEffect": (el)=>{
                    if (el) observer.observe(el);
                }
            }["Offers.useEffect"]);
            return ({
                "Offers.useEffect": ()=>observer.disconnect()
            })["Offers.useEffect"];
        }
    }["Offers.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Offers.useEffect": ()=>{
            const target = offersRef.current;
            if (!target) return;
            const observer = new IntersectionObserver({
                "Offers.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsOffersVisible(true);
                        observer.disconnect();
                    }
                }
            }["Offers.useEffect"], {
                rootMargin: "200px 0px",
                threshold: 0.1
            });
            observer.observe(target);
            return ({
                "Offers.useEffect": ()=>observer.disconnect()
            })["Offers.useEffect"];
        }
    }["Offers.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Offers.useEffect": ()=>{
            if (!isOffersVisible) return;
            let isMounted = true;
            let cleanupResize = null;
            const initPixi = {
                "Offers.useEffect.initPixi": async ()=>{
                    if (!pixiContainerRef.current) return;
                    const pixi = await __turbopack_context__.A("[project]/node_modules/pixi.js/lib/index.mjs [app-client] (ecmascript, async loader)");
                    if (!isMounted) return;
                    const app = new pixi.Application();
                    await app.init({
                        backgroundAlpha: 0,
                        antialias: true
                    });
                    app.ticker.start();
                    pixiAppRef.current = app;
                    pixiContainerRef.current.innerHTML = "";
                    pixiContainerRef.current.appendChild(app.canvas);
                    app.canvas.style.width = "100%";
                    app.canvas.style.height = "100%";
                    app.canvas.style.display = "block";
                    const loadedTextures = await Promise.all(items.map({
                        "Offers.useEffect.initPixi": async (item)=>{
                            try {
                                return await pixi.Assets.load(item.image);
                            } catch  {
                                return null;
                            }
                        }
                    }["Offers.useEffect.initPixi"]));
                    if (!isMounted) return;
                    const textures = loadedTextures.map({
                        "Offers.useEffect.initPixi.textures": (texture)=>texture || pixi.Texture.EMPTY
                    }["Offers.useEffect.initPixi.textures"]);
                    const displacementSprite = new pixi.Sprite(textures[0]);
                    displacementSprite.alpha = 0.001;
                    displacementSprite.width = app.screen.width;
                    displacementSprite.height = app.screen.height;
                    const displacementFilter = new pixi.DisplacementFilter(displacementSprite);
                    displacementFilter.scale.set(0, 0);
                    const imageContainer = new pixi.Container();
                    imageContainer.filters = [
                        displacementFilter
                    ];
                    app.stage.addChild(displacementSprite);
                    app.stage.addChild(imageContainer);
                    const currentSprite = new pixi.Sprite(textures[0]);
                    const nextSprite = new pixi.Sprite(textures[0]);
                    nextSprite.alpha = 0;
                    imageContainer.addChild(currentSprite);
                    imageContainer.addChild(nextSprite);
                    const fitSprite = {
                        "Offers.useEffect.initPixi.fitSprite": (sprite)=>{
                            if (!sprite.texture?.width || !sprite.texture?.height) return;
                            const scale = Math.max(app.screen.width / sprite.texture.width, app.screen.height / sprite.texture.height);
                            sprite.width = sprite.texture.width * scale;
                            sprite.height = sprite.texture.height * scale;
                            sprite.x = (app.screen.width - sprite.width) / 2;
                            sprite.y = (app.screen.height - sprite.height) / 2;
                        }
                    }["Offers.useEffect.initPixi.fitSprite"];
                    const resizeAll = {
                        "Offers.useEffect.initPixi.resizeAll": ()=>{
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
                        }
                    }["Offers.useEffect.initPixi.resizeAll"];
                    resizeAll();
                    fitSprite(currentSprite);
                    const onResize = {
                        "Offers.useEffect.initPixi.onResize": ()=>resizeAll()
                    }["Offers.useEffect.initPixi.onResize"];
                    const resizeObserver = new ResizeObserver(onResize);
                    resizeObserver.observe(pixiContainerRef.current);
                    cleanupResize = ({
                        "Offers.useEffect.initPixi": ()=>{
                            resizeObserver.disconnect();
                            window.removeEventListener("resize", onResize);
                        }
                    })["Offers.useEffect.initPixi"];
                    pixiStateRef.current = {
                        textures,
                        currentIndex: 0,
                        currentSprite,
                        nextSprite,
                        displacementFilter,
                        displacementSprite,
                        imageContainer,
                        fitSprite,
                        isTransitioning: false
                    };
                    app.render();
                }
            }["Offers.useEffect.initPixi"];
            if (!pixiAppRef.current) {
                initPixi();
            }
            return ({
                "Offers.useEffect": ()=>{
                    isMounted = false;
                    if (cleanupResize) cleanupResize();
                    if (pixiAppRef.current) {
                        pixiAppRef.current.destroy(true);
                        pixiAppRef.current = null;
                    }
                }
            })["Offers.useEffect"];
        }
    }["Offers.useEffect"], [
        items,
        isOffersVisible
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Offers.useEffect": ()=>{
            const app = pixiAppRef.current;
            const state = pixiStateRef.current;
            if (!app || !state.textures.length) return;
            if (activeIndex === state.currentIndex) return;
            if (activeIndex >= state.textures.length) return;
            const { currentSprite, nextSprite, displacementFilter, displacementSprite, textures, fitSprite } = state;
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
            const tick = {
                "Offers.useEffect.tick": ()=>{
                    elapsed += app.ticker.deltaMS / 1000;
                    const ease = {
                        "Offers.useEffect.tick.ease": (t)=>t * t * (3 - 2 * t)
                    }["Offers.useEffect.tick.ease"]; // smoothstep
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
                }
            }["Offers.useEffect.tick"];
            app.ticker.add(tick);
        }
    }["Offers.useEffect"], [
        activeIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sectionTitle",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dots$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/Offers/Offers.jsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Почему бизнесу выгодно работать с нами"
                    }, void 0, false, {
                        fileName: "[project]/components/Offers/Offers.jsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Offers/Offers.jsx",
                lineNumber: 272,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "offersContainer",
                ref: offersRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "offersSticky",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "offersMedia",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "offersCanvas",
                                ref: pixiContainerRef
                            }, void 0, false, {
                                fileName: "[project]/components/Offers/Offers.jsx",
                                lineNumber: 279,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Offers/Offers.jsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Offers/Offers.jsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "offersTrack",
                        children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "offersItem",
                                ref: (el)=>{
                                    itemRefs.current[index] = el;
                                },
                                "data-index": index,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "offersItemInner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/Offers/Offers.jsx",
                                            lineNumber: 293,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: item.body
                                        }, void 0, false, {
                                            fileName: "[project]/components/Offers/Offers.jsx",
                                            lineNumber: 294,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Offers/Offers.jsx",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, `${item.title}-${index}`, false, {
                                fileName: "[project]/components/Offers/Offers.jsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/Offers/Offers.jsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Offers/Offers.jsx",
                lineNumber: 276,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Offers/Offers.jsx",
        lineNumber: 271,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Offers, "7HstKxTFih9tPgEeugd5F5n+s2w=");
_c = Offers;
const __TURBOPACK__default__export__ = Offers;
var _c;
__turbopack_context__.k.register(_c, "Offers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Services/ServiceCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/button/dist/chunk-WBUKVQRU.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const ServiceCard = ({ title, items, buttonLabel = "Learn more", buttonHref = "#", backgroundImage })=>{
    const hasItems = Array.isArray(items) && items.length > 0;
    const cardStyle = backgroundImage ? {
        "--service-bg": `url(${backgroundImage})`
    } : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: buttonHref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "serviceCard",
            style: cardStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "serviceHeader",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/Services/ServiceCard.jsx",
                            lineNumber: 20,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        hasItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "serviceList",
                            children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            children: item
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services/ServiceCard.jsx",
                                            lineNumber: 25,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        index < items.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "serviceListDot",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services/ServiceCard.jsx",
                                            lineNumber: 27,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, `${item}-${index}`, true, {
                                    fileName: "[project]/components/Services/ServiceCard.jsx",
                                    lineNumber: 24,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/Services/ServiceCard.jsx",
                            lineNumber: 22,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Services/ServiceCard.jsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$button$2f$dist$2f$chunk$2d$WBUKVQRU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                    className: "serviceButton",
                    children: buttonLabel
                }, void 0, false, {
                    fileName: "[project]/components/Services/ServiceCard.jsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Services/ServiceCard.jsx",
            lineNumber: 18,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Services/ServiceCard.jsx",
        lineNumber: 17,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ServiceCard;
const __TURBOPACK__default__export__ = ServiceCard;
var _c;
__turbopack_context__.k.register(_c, "ServiceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Services/Services.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dots$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Dots.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Services$2f$ServiceCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Services/ServiceCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$services$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/services.js [app-client] (ecmascript)");
;
;
;
;
;
const Services = ({ cards })=>{
    const resolvedCards = Array.isArray(cards) && cards.length ? cards : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$services$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultServices"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sectionTitle",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dots$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/Services/Services.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Для роста вашего бизнеса"
                    }, void 0, false, {
                        fileName: "[project]/components/Services/Services.jsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Services/Services.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "servicesContainer",
                children: resolvedCards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Services$2f$ServiceCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...card
                    }, `${card.title}-${index}`, false, {
                        fileName: "[project]/components/Services/Services.jsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/Services/Services.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Services/Services.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Services;
const __TURBOPACK__default__export__ = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Cases$2f$Cases$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Cases/Cases.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contacts$2f$Contacts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Contacts/Contacts.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer/Footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Hero/Hero.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Offers$2f$Offers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Offers/Offers.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Services$2f$Services$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Services/Services.jsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "hero",
                className: "sectionAnchor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2f$Hero$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 15,
                    columnNumber: 52
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "services",
                className: "sectionAnchor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Services$2f$Services$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 16,
                    columnNumber: 56
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "offers",
                className: "sectionFull",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Offers$2f$Offers$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 17,
                    columnNumber: 52
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "cases",
                className: "sectionAnchor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Cases$2f$Cases$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 18,
                    columnNumber: 53
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contacts",
                className: "sectionAnchor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contacts$2f$Contacts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 19,
                    columnNumber: 56
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sectionAnchor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 20,
                    columnNumber: 42
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_273b92d3._.js.map