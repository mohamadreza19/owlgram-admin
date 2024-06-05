"use client";
import { ReactNode } from "react";
import ServicesModule from "./services.module";

export default ({ children }: { children: ReactNode }) => (
  <ServicesModule>{children}</ServicesModule>
);
