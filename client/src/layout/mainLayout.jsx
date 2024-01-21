import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Eventbar from "../components/eventBar";

function MainLayout() {
  return (
    <div class="background-container">
      <Header />
      <Sidebar />
      <Eventbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
