"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIntersectionObserver = void 0;
const react_1 = require("react");
const useIntersectionObserver = (onIntersect, { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = true, }) => {
    const ref = (0, react_1.useRef)(null);
    const callback = (0, react_1.useCallback)((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && freezeOnceVisible)
                onIntersect(entry, observer);
        });
    }, [onIntersect, freezeOnceVisible]);
    (0, react_1.useEffect)(() => {
        if (!ref.current)
            return;
        const observer = new IntersectionObserver(callback, {
            threshold,
            root,
            rootMargin,
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, threshold, root, rootMargin, callback]);
    return ref;
};
exports.useIntersectionObserver = useIntersectionObserver;
//# sourceMappingURL=useIntersectionObserver.js.map