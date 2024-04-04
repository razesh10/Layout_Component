import React, { useContext } from "react";
import styles from "@/components/MainContent/maincontent.module.css";
import { MyContext } from "@/app/dashboard/page";
import SideBar from "../SideBar/SideBar";
import NavigationBar from "../NavigationBar/NavigationBar";

const MainContent = ({ children }: any) => {
  const { state } = useContext(MyContext);
  return (
    <div
      className={`${styles.maincontent} ${
        state ? styles.maincontentFull : styles.maincontentSmall
      }`}
    >
      <NavigationBar />
      <SideBar />
      {children}
    </div>
  );
};

export default MainContent;
