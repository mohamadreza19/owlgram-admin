import QuestionAnswerService from "./questionAnswer.service";
import QuestionAnswerApiService from "./questionAnswer.api";
import { FormikCreate8 } from "../lib/shared/interfaces";
import { AlertService } from "../lib/services";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

class QuestionAnswerController {
  constructor(
    private questionAnswerService: QuestionAnswerService,
    private questionAnswerApiService: QuestionAnswerApiService,
    private alertService: AlertService,
    private router: AppRouterInstance
  ) {}

  handleFetchQuestionAnswersBasedLanguageId = async (language_id: string) => {
    const result =
      await this.questionAnswerApiService.getQuestionAnswerByLanguageId(
        language_id
      );

    this.questionAnswerService.setQuestionAnswer(result);
  };
  handleCreateQuestionAnswers = async (values: FormikCreate8) => {
    await this.questionAnswerApiService.createQuestionAnswerByLanguageId(
      values
    );

    this.router.push("/languages");

    this.alertService.addDismissAlert({
      open: true,
      type: "success",
      message: "Question and answer add successful",
    });
  };
  // Add controller methods here
}
export default QuestionAnswerController;
