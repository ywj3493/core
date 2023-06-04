import { HTMLAttributes } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { OnIntersectFunction } from "../hooks/type";

interface IntersectionTargetProps extends HTMLAttributes<HTMLDivElement> {
  onIntersect: OnIntersectFunction;
}

export default function InvisibleIntersectionTarget({
  onIntersect,
  ...props
}: IntersectionTargetProps) {
  const targetRef = useIntersectionObserver(onIntersect, { threshold: 1 });
  return <div style={{ width: "1px" }} ref={targetRef} {...props}></div>;
}
