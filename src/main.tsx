import "@/styles/global.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/home";



createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      {/* Guest Pages */}
        <Route path="/" element={<HomePage />} />
    

      {/* Dashboard Pages */}
    </Routes>
  </BrowserRouter>,
)