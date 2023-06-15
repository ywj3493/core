import { HTMLAttributes } from "react";
import { useIntersectionObserver } from "@/hooks/common/useIntersectionObserver";
import { OnIntersectFunction } from "@/types";

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
