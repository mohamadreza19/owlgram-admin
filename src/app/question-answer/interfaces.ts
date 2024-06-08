import QuestionAnswerService from "./questionAnswer.service";
import QuestionAnswerController from "./questionAnswer.controller";
export type QuestionAnswer = {
  question: string;
  answer: string;
};

export interface CreateQuestionAnswer extends QuestionAnswer {
  language_id: string;
}
export type QuestionAnswerResponse = QuestionAnswer[];

export interface QuestionAnswerInjectionEntities {
  questionAnswerService: QuestionAnswerService;
  questionAnswerController: QuestionAnswerController;
}
