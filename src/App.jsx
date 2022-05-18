import "./App.css";
import FormLayoutNominator from "./pages/FormLayoutNominator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormLayout from "./FormLayout/index";
import LogoHeader from "./components/Logo";
import FormLayoutNominee from "./pages/FormLayoutNominee";
import SideBar from "./components/Sidebar";
import Login from "./pages/Admin/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SideBar />} />
        <Route path="/home" element={<FormLayout />} />    
        <Route path="/logo" element={<LogoHeader />} />
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
