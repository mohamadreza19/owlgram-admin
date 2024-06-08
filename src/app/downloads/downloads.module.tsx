"use client";
import React, { createContext, useContext, useMemo } from "react";

import DownloadsFactory from "./downloads.factory";
import { DownloadsInjectionEntities } from "./interfaces";

const InjectionContext = createContext({});
import { useRouter } from "next/navigation";

interface DownloadsModuleState {}

function DownloadsModule({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const memorizedModlue = useMemo(
    () => DownloadsFactory.createInstances(router),
    []
  );

  return (
    <InjectionContext.Provider value={memorizedModlue}>
      <main>{children}</main>
    </InjectionContext.Provider>
  );
}

export const useDownloadsInjection = (): DownloadsInjectionEntities =>
  useContext(InjectionContext) as DownloadsInjectionEntities;

export default DownloadsModule;
