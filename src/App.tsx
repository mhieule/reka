import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Learn from "./pages/Learn";
import Setting from "./pages/Setting";
import SignUp from "./pages/signup";
import Practice from "./pages/Practice";
import Competition from "./pages/Competition";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
