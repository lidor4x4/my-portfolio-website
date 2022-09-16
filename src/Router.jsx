import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ContactMe from "./components/ContactMe/ContactMe";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact-me" exact element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
