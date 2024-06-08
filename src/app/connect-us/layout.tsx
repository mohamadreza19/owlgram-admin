"use client";
import { ReactNode } from "react";
import ConnectUsModule from "./connectUs.module";

export default ({ children }: { children: ReactNode }) => (
  <ConnectUsModule>{children}</ConnectUsModule>
);
