"use client";
import React, { createContext, useContext, useMemo } from "react";

import ServicesFactory from "./services.factory";
import { ServicesInjectionEntities } from "./interfaces";
import { useRouter } from "next/navigation";

const InjectionContext = createContext({});

interface ServicesModuleState {}

function ServicesModule({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const memorizedModlue = useMemo(
    () => ServicesFactory.createInstances(router),
    []
  );

  return (
    <InjectionContext.Provider value={memorizedModlue}>
      <main>{children}</main>
    </InjectionContext.Provider>
  );
}

export const useServicesInjection = (): ServicesInjectionEntities =>
  useContext(InjectionContext) as ServicesInjectionEntities;

export default ServicesModule;
