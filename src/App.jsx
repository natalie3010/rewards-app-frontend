import "./App.css";
import FormLayoutNominator from "./pages/FormLayourNominator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormLayoutNominee from "./FormLayoutNominee/index";
import SideBar from "./components/Sidebar";
import Login from "./pages/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Nominator" element={<FormLayoutNominator />} />
        <Route path="/login" element={<Login />} />
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
