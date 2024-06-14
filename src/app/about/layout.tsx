"use client";
import { FunctionComponent, ReactNode } from "react";
import AboutModule from "./about.module";

export default function Layout({ children }: { children: ReactNode }) {
  return <AboutModule>{children}</AboutModule>;
}
