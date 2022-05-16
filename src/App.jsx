import "./App.css";
import SideBar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormLayout from "./FormLayout/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SideBar />} />
        <Route path="/home" element={<FormLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
