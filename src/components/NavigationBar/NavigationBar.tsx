"use client";
import React, { useState } from "react";
// import { MyContext } from "@/app/dashboard/page";
// import { useContext } from "react";
import styles from "@/components/NavigationBar/navigationbar.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NavigationBar = (props: any) => {
  const router = useRouter();
  const { navData } = props;
  const [state, setState] = useState(true);
  return (
    <div className={styles.navbar}>
      {navData.logo.image ? (
        <div className={styles.logo}>
          <Image
            onClick={() => router.push(navData.logo.href)}
            src={navData.logo.image}
            width={100}
            height={100}
            alt="Logo"
          />
        </div>
      ) : (
        ""
      )}
      <ul className={styles.navItems}>
        {navData.navLinks.map((item: any, index: any) => (
          <li onClick={() => router.push(item.href)} key={index}>
            {item.title}
          </li>
        ))}
      </ul>
      <div className={styles.hamButton} onClick={() => setState(!state)}>
        <Image src={navData.hamIcon} width={30} height={30} alt="" />
      </div>
      <div
        className={`${styles.navItemSmallContainer} ${
          state
            ? styles.ShowNavItemSmallContainer
            : styles.ClosedNavItemSmallContainer
        }`}
      >
        <ul className={styles.navItemSmall}>
          {navData.navLinks.map((item: any, index: number) => (
            <li onClick={() => router.push(item.href)} key={index}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => router.push(navData.contactBtn.href)}
        className={styles.contactButton}
      >
        <span>{navData.contactBtn.text}</span>
        <Image src={navData.contactBtn.icon} width={20} height={20} alt="" />
      </div>
    </div>
  );
};

export default NavigationBar;
