import { HTMLAttributes } from "react";
import { OnIntersectFunction } from "../types";
interface IntersectionTargetProps extends HTMLAttributes<HTMLDivElement> {
    onIntersect: OnIntersectFunction;
}
export default function InvisibleIntersectionTarget({ onIntersect, ...props }: IntersectionTargetProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=InvisibleIntersectionTarget.d.ts.map