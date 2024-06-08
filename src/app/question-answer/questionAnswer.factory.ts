import QuestionAnswerService from "./questionAnswer.service";
import QuestionAnswerController from "./questionAnswer.controller";
import QuestionAnswerApiService from "./questionAnswer.api";
import { QuestionAnswerInjectionEntities } from "./interfaces";
import { ModuleFactory } from "../lib/shared/interfaces";
import { AlertService } from "../lib/services";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

class QuestionAnswerFactory implements ModuleFactory {
  static createInstances(
    router: AppRouterInstance
  ): QuestionAnswerInjectionEntities {
    const questionAnswerService = new QuestionAnswerService();
    const questionAnswerController = new QuestionAnswerController(
      questionAnswerService,
      new QuestionAnswerApiService(),
      new AlertService(),
      router
    );
    return {
      questionAnswerService,
      questionAnswerController,
    };
  }
}
export default QuestionAnswerFactory;
