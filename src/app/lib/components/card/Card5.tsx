import { QuestionAnswer } from "@/app/question-answer/interfaces";
import { CCard, CCardBody, CCardHeader } from "@coreui/react-pro";
import Image from "next/image";
import { FunctionComponent, ReactNode } from "react";

interface Card5Props extends QuestionAnswer {}

const Card5: FunctionComponent<Card5Props> = ({ answer, question }) => {
  return (
    <CCard className="mb-4 min-h-64">
      <CCardHeader>
        <strong>Question and Answer</strong>
      </CCardHeader>
      <CCardBody className="overflow-hidden !p-0">
        <div className="flex flex-col gap-2 my-3 px-2">
          <label className="text-base border-b border-solid pb-2 border-gray-400 ">
            Question
          </label>
          <section className="text-sm">{question}</section>
        </div>
        <div className="flex flex-col gap-2 my-3 px-2">
          <label className="text-base border-b border-solid pb-2 border-gray-400 ">
            Answer
          </label>
          <section className="text-sm">{answer}</section>
        </div>
      </CCardBody>
    </CCard>
  );
};

export default Card5;
