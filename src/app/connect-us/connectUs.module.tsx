import React, { createContext, useContext, useMemo } from "react";

import ConnectUsFactory from "./connectUs.factory";
import { ConnectUsInjectionEntities } from "./interfaces";
import { useRouter } from "next/navigation";

const InjectionContext = createContext({});

interface ConnectUsModuleState {}

function ConnectUsModule({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const memorizedModlue = useMemo(
    () => ConnectUsFactory.createInstances(router),
    []
  );

  return (
    <InjectionContext.Provider value={memorizedModlue}>
      <main>{children}</main>
    </InjectionContext.Provider>
  );
}

export const useConnectUsInjection = (): ConnectUsInjectionEntities =>
  useContext(InjectionContext) as ConnectUsInjectionEntities;

export default ConnectUsModule;
