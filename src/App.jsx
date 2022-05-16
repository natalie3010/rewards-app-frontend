import "./App.css";
import SideBar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormLayout from "./FormLayout/index";
import LogoHeader from "./components/Logo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SideBar />} />
        <Route path="/home" element={<FormLayout />} />    
        <Route path="/logo" element={<LogoHeader />} />

      </Routes>
    </Router>
  );
}

export default App;
