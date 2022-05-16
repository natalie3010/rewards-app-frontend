import "./App.css";
import FormLayoutNominator from "./FormLayourNominator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormLayoutNominee from "./FormLayoutNominee/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Nominator" element={<FormLayoutNominator />} />
        <Route path="/" element={<FormLayoutNominee />} />
      </Routes>
    </Router>
  );
}

export default App;
