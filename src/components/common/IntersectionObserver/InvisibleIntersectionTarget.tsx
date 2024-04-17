import { useIntersectionObserver } from "@/hooks/common/useIntersectionObserver";
import { IntersectionTargetProps } from "@/types";

export default function InvisibleIntersectionTarget({
  onIntersect,
  options,
  ...props
}: IntersectionTargetProps) {
  const targetRef = useIntersectionObserver({ onIntersect, options });
  return <div style={{ width: "1px" }} ref={targetRef} {...props}></div>;
}
