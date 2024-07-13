"use client";

import { ReactNode } from "react";
import DownloadsModule from "./downloads.module";
import LanguagesModule from "../languages/languages.module";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DownloadsModule>
      <LanguagesModule>{children}</LanguagesModule>
    </DownloadsModule>
  );
}
