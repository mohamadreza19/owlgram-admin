"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
} from "react";

import AppFactory from "./app.factory";
import { AppInjectionEntities } from "./interfaces";
import { usePathname, useRouter } from "next/navigation";
import { LoadingService } from "@lib/services";
import { MainNavbar } from "@lib/components/navbar";
import AppHeader from "@lib/components/layout/AppHeader";
import AppSidebar from "@lib/components/layout/AppSidebar";

const InjectionContext = createContext({});

interface AppModuleState {}

function AppModule({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathName = usePathname();
  const loadingService = useMemo(() => new LoadingService(), []);
  const memorizedModlue = useMemo(() => AppFactory.createInstances(router), []);
  const isSidebarOpen = memorizedModlue.themeService.getSideBar(true);
  useLayoutEffect(() => {
    loadingService.removePluse();

    return () => {
      loadingService.removePluse();
    };
  }, [document.readyState]);

  useEffect(() => {
    // memorizedModlue.authController.authorizeUserBasedTokenExist();
    memorizedModlue.loginController.authorizeUserIfLogin();
  }, []);

  return (
    <InjectionContext.Provider value={memorizedModlue}>
      {!pathName.includes("login") && (
        <AppSidebar isSidebarOpen={isSidebarOpen} />
      )}

      <main className={`${isSidebarOpen && "ms-[256px]"}`}>
        {!pathName.includes("login") && (
          <AppHeader
            toggleSideBar={memorizedModlue.themeService.toggleSideBar}
          />
        )}

        {children}
      </main>
    </InjectionContext.Provider>
  );
}

export const useAppInjection = (): AppInjectionEntities =>
  useContext(InjectionContext) as AppInjectionEntities;

export default AppModule;
