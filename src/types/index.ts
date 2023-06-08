import { HTMLAttributes } from "react";

export declare type OnIntersectFunction = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

export interface UseIntersectionObserverOptions
  extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export interface UseIntersectionObserverParams
  extends UseIntersectionObserverOptions {
  onIntersect: OnIntersectFunction;
  options?: UseIntersectionObserverOptions;
}

export interface IntersectionTargetProps
  extends HTMLAttributes<HTMLDivElement> {
  onIntersect: OnIntersectFunction;
}

export interface InfiniteScrollProps extends HTMLAttributes<HTMLDivElement> {
  onScrollEnd: OnIntersectFunction;
}
