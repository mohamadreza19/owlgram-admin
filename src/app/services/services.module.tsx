"use client";
import React, { createContext, useContext, useMemo } from "react";

import ServicesFactory from "./services.factory";
import { ServicesInjectionEntities } from "./interfaces";

const InjectionContext = createContext({});

interface ServicesModuleState {}

function ServicesModule({ children }: { children: React.ReactNode }) {
  const memorizedModlue = useMemo(() => ServicesFactory.createInstances(), []);

  return (
    <InjectionContext.Provider value={memorizedModlue}>
      <main>{children}</main>
    </InjectionContext.Provider>
  );
}

export const useServicesInjection = (): ServicesInjectionEntities =>
  useContext(InjectionContext) as ServicesInjectionEntities;

export default ServicesModule;
