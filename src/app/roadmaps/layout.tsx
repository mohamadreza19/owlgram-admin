'use client';

import { ReactNode } from 'react';
import RoadmapsModule from './roadmaps.module';

export default ({ children }: { children: ReactNode }) => (
  <RoadmapsModule>{children}</RoadmapsModule>
);
