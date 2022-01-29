import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { Layout } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import SingIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PageNotFound from "./components/NotFound";
import "./styles/index.scss";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Layout className="app-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sign-in" element={<SingIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/products" element={<Products />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
        <Footer />
      </Layout>
      ,
    </BrowserRouter>
  );
}

export default App;
