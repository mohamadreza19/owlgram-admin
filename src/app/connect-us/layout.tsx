'use client';
import { ReactNode } from 'react';
import ConnectUsModule from './connectUs.module';
import LanguagesModule from '../languages/languages.module';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ConnectUsModule>
      <LanguagesModule>{children}</LanguagesModule>
    </ConnectUsModule>
  );
}
