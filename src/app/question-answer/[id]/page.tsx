"use client";
import { FunctionComponent, useEffect } from "react";
import { useQuestionAnswerInjection } from "../questionAnswer.module";
import { useParams } from "next/navigation";
import Card5 from "@/app/lib/components/card/Card5";
import NotContentFound from "@/app/lib/components/NotContentFound";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  const module = useQuestionAnswerInjection();
  const questionAnswers = module.questionAnswerService.getQuestionAnswer(true);
  const { id } = useParams<{
    id: string;
  }>();

  useEffect(() => {
    if (id)
      module.questionAnswerController.handleFetchQuestionAnswersBasedLanguageId(
        id
      );
  }, [id]);
  if (!questionAnswers.length) return <NotContentFound />;
  return (
    <div className="container grid md:grid-cols-2 grid-cols-1 gap-4">
      {questionAnswers.map((item, i) => (
        <Card5 key={i} {...item} />
      ))}
    </div>
  );
};

export default Page;
