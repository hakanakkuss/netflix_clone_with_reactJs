import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Signin, Signup, Browse } from "./pages";
import * as ROUTES from "./constants/routes";
import { seedDatabase, Add } from "./seed";
export default function App() {
  Add();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/browse" element={<Browse />} />

        <Route path="/signin" element={<Signin />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
