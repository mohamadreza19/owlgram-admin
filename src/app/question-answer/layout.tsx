'use client';
import { ReactNode } from 'react';
import QuestionAnswerModule from './questionAnswer.module';
import LanguagesModule from '../languages/languages.module';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <QuestionAnswerModule>
      <LanguagesModule>{children}</LanguagesModule>
    </QuestionAnswerModule>
  );
}
