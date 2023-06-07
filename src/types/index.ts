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