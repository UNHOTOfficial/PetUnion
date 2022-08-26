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
import PrivacyPolicy from "../Content/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "../Content/TermsOfUse/TermsOfUse";
import Support from "../Content/Support/Support";
import HowTo from "../Content/HowTo/HowTo";
import HelpCenter from "../Content/HelpCenter/HelpCenter";
import ReportABug from "../Content/ReportABug/ReportABug";
import Page404 from "./Page404";
import Signin from "../Content/Accounts/SignIn";
import "../dark.scss";
import JobsContainer from "../Content/Jobs/JobsContainer";
import BlogContainer from "../Content/Blog/BlogContainer";
import HeaderSecondary from "../Header/HeaderSecondary";

import UserAgreement from "../Content/PrivacyPolicy/Content/UserAgreement";
import PromoHeader from "../Header/PromoHeader";
import Apps from "../Content/Apps/Apps";
import Products from "../Content/Products/Products";
import Cart from "../Content/Cart/Cart";
import Offers from "../Content/Offers/Offers";
import Admin from "../Content/Admin/Admin";
import SignUp from "../Content/Accounts/SignUp";
import ProductsPage from "../Content/ProductsPages/ProductsPage";
import Profile from "../Dashboard/Profile";
import ProductSearch from "../Content/ProductsSearch/ProductsSearch"

export default function PageConstructor() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <PromoHeader />
        <Header />
        <HeaderSecondary />
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
          <Route exact path="/signin" element={<Signin />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/apps" element={<Apps />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/offers" element={<Offers />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/search/:query" element={<ProductSearch />}></Route>
          <Route exact path="/profile/:content" element={<Profile/>}></Route>
          <Route exact  path="/products/:id" element={<ProductsPage />}></Route>
          <Route path="*" element={<Page404 />}></Route>

          {/* legal */}
          <Route
            exact
            path="legal/agreement"
            element={<UserAgreement />}
          ></Route>
          {/* <Route exact path={"/Product/:ProductID"} element={<ProductDetail />}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}
