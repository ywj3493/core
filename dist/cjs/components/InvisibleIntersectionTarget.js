"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const useIntersectionObserver_1 = require("../hooks/useIntersectionObserver");
function InvisibleIntersectionTarget({ onIntersect, ...props }) {
    const targetRef = (0, useIntersectionObserver_1.useIntersectionObserver)(onIntersect, { threshold: 1 });
    return (0, jsx_runtime_1.jsx)("div", { style: { width: "1px" }, ref: targetRef, ...props }, void 0);
}
exports.default = InvisibleIntersectionTarget;
//# sourceMappingURL=InvisibleIntersectionTarget.js.map