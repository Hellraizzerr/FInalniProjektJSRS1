import "./CSS/loader.css";
import Loader from "./Components/Loader.js";
import MainPg from "./Components/Main.js";
import Cars from "./Components/Cars.js";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div className="MainApp">
      <Router>
        <Routes>
          <Route path="/" element={<Loader />}></Route>
          <Route path="/Main" element={<MainPg />}></Route>
          <Route path="/Cars" element={<Cars />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
