import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalstyles";
import "./App.css";
import Landing from "./components/Landing";
function App() {
  return (
    // <Router basename={process.env.PUBLIC_URL}>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
