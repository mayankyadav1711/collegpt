// MainLayout.js

import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
// import Eventbar from "../components/eventBar";

function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="background-container">
      <Header />
      {/* <Sidebar /> */}
      {/* <Eventbar /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
