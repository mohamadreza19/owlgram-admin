 'use client'
import React, { createContext, useContext, useMemo } from "react";



import SocialNetworksFactory from "./socialNetworks.factory";
import { SocialNetworksInjectionEntities } from "./interfaces";

const InjectionContext = createContext({});

interface SocialNetworksModuleState {}

function SocialNetworksModule({children}:{children:React.ReactNode}) {
  const memorizedModlue = useMemo(
    () => SocialNetworksFactory.createInstances(),
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

export const useSocialNetworksInjection = (): SocialNetworksInjectionEntities =>
  useContext(InjectionContext) as SocialNetworksInjectionEntities;

export default SocialNetworksModule;

