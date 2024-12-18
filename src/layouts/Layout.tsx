import React from "react";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-pink-700">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
