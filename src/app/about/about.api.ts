import ApiService from "../lib/services/api/ApiService";
import {
  AboutOwlgramByLanguageIdResponse,
  AboutResponse,
  CreateAboutOwlgramBasedLanguageId,
} from "./interfaces";

class AboutApiService extends ApiService {
  async createAboutOwlgramBasedLanguageId(
    body: CreateAboutOwlgramBasedLanguageId
  ) {
    const result = await this.$axios.post(
      "/aboutOwlegram",
      this.jsonToFormData(body),
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return result.data;
  }
  async getAboutOwlgramByLanguageId(
    languageId: string
  ): Promise<AboutOwlgramByLanguageIdResponse> {
    const result = await this.$axios.get(
      "/getAboutOwlegram?language_id=" + languageId
    );
    return result.data;
  }
}

export default AboutApiService;
