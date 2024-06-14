"use client";
import { ReactNode } from "react";
import ConnectUsModule from "./connectUs.module";

export default function Layout({ children }: { children: ReactNode }) {
  return <ConnectUsModule>{children}</ConnectUsModule>;
}
