 'use client'
import React, { createContext, useContext, useMemo } from "react";



import MrZarFactory from "./mrZar.factory";
import { MrZarInjectionEntities } from "./interfaces";

const InjectionContext = createContext({});

interface MrZarModuleState {}

function MrZarModule({children}:{children:React.ReactNode}) {
  const memorizedModlue = useMemo(
    () => MrZarFactory.createInstances(),
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

export const useMrZarInjection = (): MrZarInjectionEntities =>
  useContext(InjectionContext) as MrZarInjectionEntities;

export default MrZarModule;

