"use client";

import { ReactNode } from "react";
import DownloadsModule from "./downloads.module";

export default ({ children }: { children: ReactNode }) => (
  <DownloadsModule>{children}</DownloadsModule>
);
