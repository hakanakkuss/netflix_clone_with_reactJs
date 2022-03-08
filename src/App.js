import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Signin, Signup, Browse } from "./pages";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/browse" element={<Browse />}></Route>

        <Route path="/signin" element={<Signin />}></Route>

        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
