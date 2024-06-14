import React, { createContext, useContext, useEffect, useMemo } from "react";

import LoginFactory from "./login.factory";
import { LoginInjectionEntities } from "./interfaces";
import { usePathname, useRouter } from "next/navigation";

const InjectionContext = createContext({});

interface LoginModuleState {}

function LoginModule({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const memorizedModlue = useMemo(
    () => LoginFactory.createInstances(router),
    []
  );

  useEffect(() => {
    memorizedModlue.loginController.authorizeUserIfLogin(pathname);
  }, []);
  return (
    <InjectionContext.Provider value={memorizedModlue}>
      <main>{children}</main>
    </InjectionContext.Provider>
  );
}

export const useLoginInjection = (): LoginInjectionEntities =>
  useContext(InjectionContext) as LoginInjectionEntities;

export default LoginModule;
