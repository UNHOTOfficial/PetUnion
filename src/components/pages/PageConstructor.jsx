import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutContent from "../Content/AboutContent";
import FAQsContent from "../Content/FAQsContent";
import HomeContent from "../Content/HomeContent";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function PageConstructor() {
  return (
    <div>
<BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<HomeContent/>}></Route>
          <Route exact path="/FAQs" element={<FAQsContent />}></Route>
          <Route exact path="/About" element={<AboutContent />}></Route>
        </Routes>
      <Footer />
</BrowserRouter>

    </div>
  );
}
