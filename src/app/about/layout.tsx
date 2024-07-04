'use client';
import { FunctionComponent, ReactNode } from 'react';
import AboutModule from './about.module';
import LanguagesModule from '../languages/languages.module';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AboutModule>
      <LanguagesModule>{children}</LanguagesModule>
    </AboutModule>
  );
}
