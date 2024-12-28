import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../page/Shared/Footer/Footer";
import Navbar from "../page/Shared/Navbar/Navbar";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
