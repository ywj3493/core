# Metis Library

## Features

- metis library

## Install

```shell
    pnpm install @metislib/core
```

## Component

- InvisibleIntersectionTarget: this component can help easy to use IntersectionObserver API.

  ```typescript
  const handleIntersect: OnIntersectFunction = async (entry, observer) => {
    observer.unobserve(entry.target);
    console.dir("observed");
  };

  return (
    <div className="App">
      <h1>TEST</h1>
      <div style={{ height: "2000px" }} />
      <InvisibleIntersectionTarget onIntersect={handleIntersect} />
    </div>
  );
  ```

- InfiniteScrollSection.tsx: If observed end of this div component, handles onScrollEnd props function.

  ```typescript
  const handleIntersect: OnIntersectFunction = async (entry, observer) => {
    observer.unobserve(entry.target);
    console.dir("observed");
  };

  return (
    <div className="App">
      <h1>TEST</h1>
      <InfiniteScrollSection onScrollEnd={handleIntersect} />
      <div style={{ height: "2000px" }}></div>
    </div>
  );
  ```
