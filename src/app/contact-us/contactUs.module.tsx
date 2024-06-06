'use client';
import React, { createContext, useContext, useMemo } from 'react';
import ContactUsFactory from './contactUs.factory';
import { ContactUsInjectionEntities } from './interfaces';

const InjectionContext = createContext({});

interface ContactUsModuleState {}

function ContactUsModule({ children }: { children: React.ReactNode }) {
  const memorizedModlue = useMemo(() => ContactUsFactory.createInstances(), []);

  return (
    <InjectionContext.Provider value={memorizedModlue}>
      <main>{children}</main>
    </InjectionContext.Provider>
  );
}

export const useContactUsInjection = (): ContactUsInjectionEntities =>
  useContext(InjectionContext) as ContactUsInjectionEntities;

export default ContactUsModule;
