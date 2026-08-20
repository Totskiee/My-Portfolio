import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}