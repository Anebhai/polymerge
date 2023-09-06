import Faraway from "./faraway/Faraway";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faraway" element={<Faraway />} />
      </Routes>
    </div>
  );
}

export default App;
