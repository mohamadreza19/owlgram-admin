import React, { createContext, useContext, useMemo } from 'react';

import TeamsFactory from './teams.factory';
import { TeamsInjectionEntities } from './interfaces';
import { useRouter } from 'next/navigation';

const InjectionContext = createContext({});

interface TeamsModuleState {}

function TeamsModule({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const memorizedModlue = useMemo(
    () => TeamsFactory.createInstances(router),
    []
  );

  return (
    <InjectionContext.Provider value={memorizedModlue}>
      <main>{children}</main>
    </InjectionContext.Provider>
  );
}

export const useTeamsInjection = (): TeamsInjectionEntities =>
  useContext(InjectionContext) as TeamsInjectionEntities;

export default TeamsModule;
