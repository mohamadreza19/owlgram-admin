'use client';
import { ReactNode } from 'react';
import ServicesModule from './services.module';
import LanguagesModule from '../languages/languages.module';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ServicesModule>
      <LanguagesModule>{children}</LanguagesModule>
    </ServicesModule>
  );
}
