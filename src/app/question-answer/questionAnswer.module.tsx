"use client";
import React, { createContext, useContext, useMemo } from "react";

import QuestionAnswerFactory from "./questionAnswer.factory";
import { QuestionAnswerInjectionEntities } from "./interfaces";
import { useRouter } from "next/navigation";

const InjectionContext = createContext({});

interface QuestionAnswerModuleState {}

function QuestionAnswerModule({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const memorizedModlue = useMemo(
    () => QuestionAnswerFactory.createInstances(router),
    []
  );

  return (
    <InjectionContext.Provider value={memorizedModlue}>
      <main>{children}</main>
    </InjectionContext.Provider>
  );
}

export const useQuestionAnswerInjection = (): QuestionAnswerInjectionEntities =>
  useContext(InjectionContext) as QuestionAnswerInjectionEntities;

export default QuestionAnswerModule;
