"use client";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import React from "react";
import Mainlogo from "../../../public/next.svg";
import leftArrow from "@/assets/right-arrow-svgrepo-com.svg";
import HamIcon from "@/assets/burger-list-menu-navigation-svgrepo-com.svg";
import Footer from "@/components/Footer/Footer";

import { footerData, navData } from "@/utils/utils";
import SideBar from "@/components/SideBar/SideBar";
import { MyContext } from "../dashboard/page";
import Icon from "@/assets/dashboard-svgrepo-com.svg";
import Crousel from "@/components/crousel/crousel";

const sidebarData = {
  sidebarItems: [
    {
      title: "Dashboard",
      icon: Icon,
      href: "/",
    },
    {
      title: "Teansactions",
      icon: Icon,
      href: "/dashboard",
    },
    {
      title: "Dashboard",
      icon: Icon,
      href: "/dashboard",
    },
    {
      title: "Dashboard",
      icon: Icon,
      href: "/dashboard",
    },
    {
      title: "Dashboard",
      icon: Icon,
      href: "/dashboard",
    },
  ],
};

const Checkout = () => {
  return (
    <>
      {/* <NavigationBar navData={navData} /> */}
      {/* <Footer footerData={footerData} /> */}
      {/* <SideBar sidebarData={sidebarData} /> */}
      <Crousel />
    </>
  );
};

export default Checkout;
