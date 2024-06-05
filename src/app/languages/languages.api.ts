import ApiService from "../lib/services/api/ApiService";
import {
  AboutOwlgramByLanguageIdResponse,
  BodyShared2,
  CreateAboutOwlgramBasedLanguageId,
  Createlanguage,
  LanguagesResponse,
} from "./interfaces";

class LanguagesApiService extends ApiService {
  async getLanguages(): Promise<LanguagesResponse> {
    const result = await this.$axios.get("/getAllLanguage");
    return result.data;
  }
  async CreateLanguage(body: Createlanguage): Promise<LanguagesResponse> {
    const result = await this.$axios.post("/createLanguage", body);
    return result.data;
  }
  async CreateAboutOwlgramBasedLanguageId(
    body: CreateAboutOwlgramBasedLanguageId
  ): Promise<LanguagesResponse> {
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
  async createServiceBasedLanguageId(
    body: BodyShared2
  ): Promise<LanguagesResponse> {
    const result = await this.$axios.post(
      "/createService",
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

export default LanguagesApiService;
