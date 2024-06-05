import ApiService from "../lib/services/api/ApiService";
import { GetServiceResponse, ServicesResponse } from "./interfaces";

class ServicesApiService extends ApiService {
  async getServiceBasedLanguagedId(
    languageId: string
  ): Promise<GetServiceResponse> {
    const result = await this.$axios.get(
      "/getService?language_id=" + languageId
    );

    return result.data;
  }
}

export default ServicesApiService;
