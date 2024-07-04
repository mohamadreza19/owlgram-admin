'use client';
import React, { createContext, useContext, useEffect, useMemo } from 'react';

import LanguagesFactory from './languages.factory';
import { LanguagesInjectionEntities } from './interfaces';
import { useRouter } from 'next/navigation';

const InjectionContext = createContext({});

interface LanguagesModuleState {}

function LanguagesModule({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const memorizedModlue = useMemo(
    () => LanguagesFactory.createInstances(router),
    []
  );

  useEffect(() => {
    memorizedModlue.languagesController.handleFetchLanguages();
  }, []);

  return (
    <InjectionContext.Provider value={memorizedModlue}>
      {children}
    </InjectionContext.Provider>
  );
}

export const useLanguagesInjection = (): LanguagesInjectionEntities =>
  useContext(InjectionContext) as LanguagesInjectionEntities;

export default LanguagesModule;
