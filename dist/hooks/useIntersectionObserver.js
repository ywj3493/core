import { useEffect, useCallback, useRef } from "react";
export const useIntersectionObserver = (onIntersect, { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = true, }) => {
    const ref = useRef(null);
    const callback = useCallback((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && freezeOnceVisible)
                onIntersect(entry, observer);
        });
    }, [onIntersect, freezeOnceVisible]);
    useEffect(() => {
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
//# sourceMappingURL=useIntersectionObserver.js.map