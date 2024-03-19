import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalstyles";
import "./App.css";
import Landing from "./components/Landing";
import Demo from "./components/Demo";
function App() {
  const baseURL =
    process.env.NODE_ENV === "development" ? "" : process.env.PUBLIC_URL;
  console.log(baseURL);
  return (
    <Router basename={baseURL}>
      <Routes>
        <Route path="/demo" element={<Demo />} />
        <Route path="/" element={<Landing />} />
        <Route path="/demo2" element={<></>} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
