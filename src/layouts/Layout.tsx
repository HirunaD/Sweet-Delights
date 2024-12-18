import React from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";

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
