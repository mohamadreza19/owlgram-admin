"use client";
import { FunctionComponent, ReactNode } from "react";
import AboutModule from "./about.module";

export default ({ children }: { children: ReactNode }) => (
  <AboutModule>{children}</AboutModule>
);
