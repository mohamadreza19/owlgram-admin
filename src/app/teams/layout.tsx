"use client";

import { ReactNode } from "react";
import TeamsFactory from "./teams.factory";
import TeamsModule from "./teams.module";

export default function Layout({ children }: { children: ReactNode }) {
  return <TeamsModule>{children}</TeamsModule>;
}
