import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//components
import App from "./components/App";
import Home from "./components/Home";
import Wishes from "./components/Wishes";

export default function Rootes() {
  return (
    <Router>
      <ToastContainer theme="dark" />
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/bday" element={<Home />}></Route>
        <Route exact path="/wishes" element={<Wishes />}></Route>
      </Routes>
    </Router>
  );
}
