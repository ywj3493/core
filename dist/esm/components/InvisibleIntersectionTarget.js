import { jsx as _jsx } from "react/jsx-runtime";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
export default function InvisibleIntersectionTarget({ onIntersect, ...props }) {
    const targetRef = useIntersectionObserver(onIntersect, { threshold: 1 });
    return _jsx("div", { style: { width: "1px" }, ref: targetRef, ...props }, void 0);
}
//# sourceMappingURL=InvisibleIntersectionTarget.js.map