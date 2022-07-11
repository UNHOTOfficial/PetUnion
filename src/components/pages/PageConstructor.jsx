import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FAQs from "./FAQs";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import About from "./About";

export default function PageConstructor() {
  return (
    <div>
<BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Content/>}></Route>
          <Route exact path="/FAQs" element={<FAQs />}></Route>
          <Route exact path="/About" element={<About />}></Route>

        </Routes>
      <Footer />
</BrowserRouter>

    </div>
  );
}
