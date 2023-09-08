import Faraway from "./faraway/Faraway";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import FlashCards from "./flashcard/Flashcard";
import Datecounter from "./steps/Steps";
import StepsRange from "./steps/StepsRange";
import Pizza from "./pizzas/Pizza";
import Accordion from "./accordion/Accordion";
import Tipcalculator from "./tipCalculator/Tipcalculator";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faraway" element={<Faraway />} />
        <Route path="/flashcard" element={<FlashCards />} />
        <Route path="/datecounter" element={<Datecounter />} />
        <Route path="/stepsrange" element={<StepsRange />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/accordian" element={<Accordion />} />
        <Route path="/tipcalculator" element={<Tipcalculator />} />
      </Routes>
    </div>
  );
}

export default App;
