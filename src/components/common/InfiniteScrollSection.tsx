import InvisibleIntersectionTarget from "./InvisibleIntersectionTarget";
import { InfiniteScrollProps } from "@/types";

const InfiniteScrollSection = ({
  onScrollEnd,
  children,
  ...props
}: InfiniteScrollProps) => {
  return (
    <div {...props}>
      {children}
      <InvisibleIntersectionTarget onIntersect={onScrollEnd} />
    </div>
  );
};

export default InfiniteScrollSection;
