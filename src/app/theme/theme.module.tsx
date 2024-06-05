import React, { createContext, useContext, useMemo } from "react";



import ThemeFactory from "./theme.factory";
import { ThemeInjectionEntities } from "./interfaces";

const InjectionContext = createContext({});

interface ThemeModuleState {}

function ThemeModule({children}:{children:React.ReactNode}) {
  const memorizedModlue = useMemo(
    () => ThemeFactory.createInstances(),
    []
  );


  return (
    <InjectionContext.Provider value={memorizedModlue}>
      <main
      
      >
       
       
          {children}
        
      </main>
    </InjectionContext.Provider>
  );
}

export const useThemeInjection = (): ThemeInjectionEntities =>
  useContext(InjectionContext) as ThemeInjectionEntities;

export default ThemeModule;

