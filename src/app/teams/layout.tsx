'use client';

import { ReactNode } from 'react';
import TeamsFactory from './teams.factory';
import TeamsModule from './teams.module';

export default ({ children }: { children: ReactNode }) => (
  <TeamsModule>{children}</TeamsModule>
);
