import "./App.css";
import InvisibleIntersectionTarget from "./core/components/InvisibleIntersectionTarget";
import { OnIntersectFunction } from "./core/hooks/type";

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
