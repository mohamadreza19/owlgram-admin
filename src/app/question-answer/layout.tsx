"use client";
import { ReactNode } from "react";
import QuestionAnswerModule from "./questionAnswer.module";

export default function Layout({ children }: { children: ReactNode }) {
  return <QuestionAnswerModule>{children}</QuestionAnswerModule>;
}
