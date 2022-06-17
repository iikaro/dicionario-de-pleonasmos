import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import './index.css';
import App from './App';
import {
  Home,
  About,
  Contact,
  Pleonasm,
  Pleonasms,
} from "./Components";
import { PleonasmOfTheDay } from "./Components/Pages/Pleonasm/PleonasmOfTheDay";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter basename="/pleonasm-dict">
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/pleonasm-of-the-day" element={<PleonasmOfTheDay />} />
        <Route path="pleonasms" element={<Pleonasms />}/>
        <Route path="/pleonasms/:pleonasmId" element={<Pleonasm />} />
        <Route
          path="*"
          element={<main><p>Essa pagina não existe!</p></main>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
