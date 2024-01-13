import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalstyles";
import "./App.css";
import Landing from "./components/Landing";
function App() {
  const baseURL = process.env.NODE_ENV === "development" ? "" : process.env.PUBLIC_URL;
  return (
    <Router basename={baseURL}>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
