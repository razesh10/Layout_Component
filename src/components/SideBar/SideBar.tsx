"use client";
import React, { useContext } from "react";
import { MyContext } from "@/app/dashboard/page";
import styles from "@/components/SideBar/sidebar.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { constants } from "buffer";
import BeeaverLogo from "@/assets/logo BeeAver.svg";

const SideBar = (props: any) => {
  const router = useRouter();
  const { sidebarData } = props;
  const { state, setState } = useContext(MyContext);
  console.log(state);

  return (
    <div className={styles.containerSidebar}>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src={BeeaverLogo}
          width={180}
          height={0}
          alt="Beeaver"
        />
      </div>
      <ul className={styles.sidebarItems}>
        {sidebarData.sidebarItems.map((item: any, index: number) => (
          <li
            onClick={() => router.push(item.href)}
            key={index}
            className={styles.sidebarItem}
          >
            <Image src={item.icon} width={20} height={20} alt="" />

            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
