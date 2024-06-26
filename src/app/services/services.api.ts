import ApiService from "../lib/services/api/ApiService";
import {
  CreateService,
  GetServiceResponse,
  ServicesResponse,
} from "./interfaces";

class ServicesApiService extends ApiService {
  async getServiceBasedLanguagedId(
    languageId: string
  ): Promise<GetServiceResponse> {
    const result = await this.$axios.get(
      "/getService?language_id=" + languageId
    );

    return result.data;
  }
  async createServiceBasedLanguagedId(
    body: CreateService
  ): Promise<GetServiceResponse> {
    const result = await this.$axios.post(
      "createService",
      this.jsonToFormData(body)
    );

    return result.data;
  }
}

export default ServicesApiService;
