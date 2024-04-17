import "./App.css";
import { OnIntersectFunction } from "@metislib/core/cjs/types";
import InvisibleIntersectionTarget from "@metislib/core/cjs/components/common/InvisibleIntersectionTarget";

function App() {
  const handleIntersect: OnIntersectFunction = async (entry, observer) => {
    observer.unobserve(entry.target);
    console.dir("observed");
  };

  return (
    <div className="App">
      <h1>TEST</h1>
      <div style={{ height: "2000px" }}></div>
      <InvisibleIntersectionTarget onIntersect={handleIntersect} />
    </div>
  );
}

export default App;
