"use client";
import { ReactNode } from "react";
import ServicesModule from "./services.module";

export default function Layout({ children }: { children: ReactNode }) {
  return <ServicesModule>{children}</ServicesModule>;
}
