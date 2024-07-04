'use client';

import { ReactNode } from 'react';
import TeamsFactory from './teams.factory';
import TeamsModule from './teams.module';
import LanguagesModule from '../languages/languages.module';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <TeamsModule>
      <LanguagesModule>{children}</LanguagesModule>
    </TeamsModule>
  );
}
