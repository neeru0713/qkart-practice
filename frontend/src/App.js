import logo from "./logo.svg";
import Home from "./components/Home";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;



