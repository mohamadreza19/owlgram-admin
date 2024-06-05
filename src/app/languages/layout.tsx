"use clinet";
import LanguagesModule from "./languages.module";

export default function LanguagesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LanguagesModule>{children}</LanguagesModule>;
}
