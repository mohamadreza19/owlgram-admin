"use client";
import React, { createContext, useContext, useMemo } from "react";

import AboutFactory from "./about.factory";
import { AboutInjectionEntities } from "./interfaces";
import { useRouter } from "next/navigation";

const InjectionContext = createContext({});

interface AboutModuleState {}

function AboutModule({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const memorizedModlue = useMemo(
    () => AboutFactory.createInstances(router),
    []
  );

  return (
    <InjectionContext.Provider value={memorizedModlue}>
      <main>{children}</main>
    </InjectionContext.Provider>
  );
}

export const useAboutInjection = (): AboutInjectionEntities =>
  useContext(InjectionContext) as AboutInjectionEntities;

export default AboutModule;
