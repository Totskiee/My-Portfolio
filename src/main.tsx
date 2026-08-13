import "@/styles/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import ProjectsPage from "@/pages/projects";
import ContactPage from "@/pages/contact";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);