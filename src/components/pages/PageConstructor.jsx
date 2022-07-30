import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../Content/About/About";
import FAQs from "../Content/FAQs/FAQs";
import Home from "../Content/Home";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Contact from "../Content/Contact/Contact";
import Cooperation from "../Content/Cooperation/CooperationContainer";
import Refund from "../Content/Refund/RefundContainer";
import Guarantee from "../Content/Guarantee/GuaranteeContainer";
import Complication from "../Content/Complication/ComplicationContainer";
import PrivacyPolicy from "../Content/PrivacyPolicy";
import TermsOfUse from "../Content/TermsOfUse";
import Support from "../Content/Support";
import HowTo from "../Content/HowTo";
import HelpCenter from "../Content/HelpCenter";
import ReportABug from "../Content/ReportABug";
import Page404 from "./Page404";
import Account from "../Content/Accounts/Account"
import '../dark.scss'
import JobsContainer from "../Content/Jobs/JobsContainer";
import './Global.scss';
import BlogContainer from "../Content/Blog/BlogContainer";

export default function PageConstructor() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/FAQs" element={<FAQs />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/blog" element={<BlogContainer />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/jobs" element={<JobsContainer />}></Route>
          <Route exact path="/cooperation" element={<Cooperation />}></Route>
          <Route exact path="/refund" element={<Refund />}></Route>
          <Route exact path="/guarantee" element={<Guarantee />}></Route>
          <Route exact path="/complication" element={<Complication />}></Route>
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route exact path="/terms" element={<TermsOfUse />}></Route>
          <Route exact path="/support" element={<Support />}></Route>
          <Route exact path="/howto" element={<HowTo />}></Route>
          <Route exact path="/help" element={<HelpCenter />}></Route>
          <Route exact path="/reportbug" element={<ReportABug />}></Route>
          <Route exact path="/Account" element={<Account/>}></Route>
          <Route path="*" element={<Page404 />}></Route>
          
          {/* <Route exact path={"/Product/:ProductID"} element={<ProductDetail />}></Route> */}

        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}
