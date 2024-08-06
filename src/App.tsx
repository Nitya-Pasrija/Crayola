import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Editor from "./pages/Editor";

const Crayola = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adjust-photos" element={<Editor />} />
      </Routes>
    </Router>
  );
};

export default Crayola;
