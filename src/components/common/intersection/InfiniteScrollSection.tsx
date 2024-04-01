import InvisibleIntersectionTarget from "./InvisibleIntersectionTarget";
import { InfiniteScrollSectionProps } from "@/types";

const InfiniteScrollSection = ({
  onScrollEnd,
  invisibleIntersectionTargetOptions,
  children,
  ...props
}: InfiniteScrollSectionProps) => {
  return (
    <div {...props}>
      {children}
      <InvisibleIntersectionTarget
        onIntersect={onScrollEnd}
        options={invisibleIntersectionTargetOptions}
      />
    </div>
  );
};

export default InfiniteScrollSection;
