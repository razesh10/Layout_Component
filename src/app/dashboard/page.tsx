"use client";
import React, { useState } from "react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import SideBar from "@/components/SideBar/SideBar";

import { createContext, useContext } from "react";
import MainContent from "@/components/MainContent/MainContent";
import { useRouter } from "next/navigation";

export const MyContext = createContext<any>({});

function Dashboard() {
  const [state, setState] = useState<boolean>(true);
  const router = useRouter();

  return (
    <MyContext.Provider value={{ state, setState }}>
      <MainContent>
        <p>Hello world, this is dashboard.</p>
        <button onClick={() => router.push("./")}>Back to Homepage</button>
      </MainContent>
    </MyContext.Provider>
  );
}

export default Dashboard;
