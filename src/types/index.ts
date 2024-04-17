import { HTMLAttributes } from "react";

export declare type OnIntersectFunction = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

export interface UseIntersectionObserverOptions
  extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export interface UseIntersectionObserverProps
  extends UseIntersectionObserverOptions {
  onIntersect: OnIntersectFunction;
  options?: UseIntersectionObserverOptions;
}

export interface IntersectionTargetProps
  extends HTMLAttributes<HTMLDivElement>,
    UseIntersectionObserverProps {}

export interface InfiniteScrollSectionProps
  extends HTMLAttributes<HTMLDivElement> {
  onScrollEnd: OnIntersectFunction;
  invisibleIntersectionTargetOptions?: UseIntersectionObserverOptions;
}
