import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing-page/home/HomePage.jsx";
import Signup from "./landing-page/signup/Signup.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  </BrowserRouter>
);
