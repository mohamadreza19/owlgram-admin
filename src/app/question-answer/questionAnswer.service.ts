import GlobalStoreService from "../lib/services/GlobalStoreService";
import { InjectUseSelect } from "../lib/shared";
import { UseSelectMethod } from "../lib/shared/interfaces";
import { QuestionAnswerResponse } from "./interfaces";
import { questionAnswerActions } from "./reducers/questionAnswer.slice";
@InjectUseSelect("questionAnswer")
class QuestionAnswerService extends GlobalStoreService {
  private useSelect!: UseSelectMethod<"questionAnswer">;

  setQuestionAnswer = (values: QuestionAnswerResponse) => {
    this.dispatch(questionAnswerActions.set(values));
  };
  getQuestionAnswer = (asHook: boolean) => {
    return this.useSelect(asHook).questionAnswer;
  };

  // Add service methods here
}
export default QuestionAnswerService;
