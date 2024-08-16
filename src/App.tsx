import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Approach from "./pages/Approach";

const Crayola = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/process-images" element={<Editor />} />
        <Route path="/approach" element={<Approach />} />
      </Routes>
    </Router>
  );
};

export default Crayola;
