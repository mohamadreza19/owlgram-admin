import ApiService from "../lib/services/api/ApiService";
import { CreateQuestionAnswer, QuestionAnswerResponse } from "./interfaces";

class QuestionAnswerApiService extends ApiService {
  async getQuestionAnswerByLanguageId(
    language_id: string
  ): Promise<QuestionAnswerResponse> {
    const result = await this.$axios.get(
      "/questionAnswer?language_id=" + language_id
    );

    return result.data;
  }
  createQuestionAnswerByLanguageId = async (body: CreateQuestionAnswer) => {
    const result = await this.$axios.post(
      "/addQuestionAnswer",
      this.jsonToFormData(body)
    );

    return result.data;
  };
}

export default QuestionAnswerApiService;
