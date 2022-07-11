import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FAQs from "./FAQs";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function PageConstructor() {
  return (
    <div>
      <Header />
<BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Content/>}></Route>
          <Route exact path="/FAQs" element={<FAQs />}></Route>

        </Routes>
</BrowserRouter>

      <Footer />
    </div>
  );
}
