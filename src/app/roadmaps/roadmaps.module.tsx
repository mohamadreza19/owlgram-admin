'use client';
import React, { createContext, useContext, useMemo } from 'react';

import RoadmapsFactory from './roadmaps.factory';
import { RoadmapsInjectionEntities } from './interfaces';
import { useRouter } from 'next/navigation';

const InjectionContext = createContext({});

interface RoadmapsModuleState {}

function RoadmapsModule({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const memorizedModlue = useMemo(
    () => RoadmapsFactory.createInstances(router),
    []
  );

  return (
    <InjectionContext.Provider value={memorizedModlue}>
      <main>{children}</main>
    </InjectionContext.Provider>
  );
}

export const useRoadmapsInjection = (): RoadmapsInjectionEntities =>
  useContext(InjectionContext) as RoadmapsInjectionEntities;

export default RoadmapsModule;
