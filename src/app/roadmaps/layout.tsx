"use client";

import { ReactNode } from "react";
import RoadmapsModule from "./roadmaps.module";

export default function Layout({ children }: { children: ReactNode }) {
  return <RoadmapsModule>{children}</RoadmapsModule>;
}
