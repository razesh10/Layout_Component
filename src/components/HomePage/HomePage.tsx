import React from "react";
import styles from "./homepage.module.css";
import NavigationBar from "../NavigationBar/NavigationBar";

const Homepage = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <NavigationBar />
      {children}
    </div>
  );
};

export default Homepage;
