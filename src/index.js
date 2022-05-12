import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import {
  Home,
  About,
  Contact,
  Pleonasm,
  Pleonasms,
  PleonasmList,
} from "./Components";

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
        {/* <Route path="/pleonasm-of-the-day" element={<Entry />} /> */}
        {/* <Route path="pleonasm-index" element={<PleonasmList />} /> */}
        <Route path="pleonasms" element={<Pleonasms />}/>
        <Route path="/pleonasms/:pleonasmId" element={<Pleonasm />} />
        <Route
          path="*"
          element={<main><p>Essa pagina não existe!</p></main>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
