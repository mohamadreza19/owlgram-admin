'use client';
import { ReactNode } from 'react';
import MrZarModule from './mrZar.module';

({ children }: { children: ReactNode }) => (
  <MrZarModule>{children}</MrZarModule>
);
