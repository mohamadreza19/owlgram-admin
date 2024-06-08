"use client";
import { ReactNode } from "react";
import QuestionAnswerModule from "./questionAnswer.module";

export default ({ children }: { children: ReactNode }) => (
  <QuestionAnswerModule>{children}</QuestionAnswerModule>
);
