import "./App.css";
import FormLayoutNominator from "./FormLayourNominator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormLayoutNominee from "./FormLayoutNominee/index";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Nominator" element={<FormLayoutNominator />} />
        {/* <Route path="/" element={<FormLayoutNominee />} /> */}
        <Route
          path="/"
          element={
            <>
              <FormLayoutNominee />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
