"use client";

import { ReactNode } from "react";
import DownloadsModule from "./downloads.module";

export default function Layout({ children }: { children: ReactNode }) {
  return <DownloadsModule>{children}</DownloadsModule>;
}
