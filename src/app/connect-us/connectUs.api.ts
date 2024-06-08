import ApiService from "@lib/services/api/ApiService";
import {
  ConnectUsResponse,
  CreateConnectUs,
  DepartmentsResponse,
} from "./interfaces";

class ConnectUsApiService extends ApiService {
  async getConnectUs(): Promise<ConnectUsResponse> {
    const result = await this.$axios.get("/connectUs");

    return result.data;
  }
  async getDepartmentsBasedLanguageId(
    languageId: string
  ): Promise<DepartmentsResponse> {
    const result = await this.$axios.get(
      "/departments?language_id=" + languageId
    );

    return result.data;
  }
  createConnectUs = async (body: CreateConnectUs) => {
    const result = await this.$axios.post(
      "/createConnecttUs",
      this.jsonToFormData(body)
    );

    return result.data;
  };
}

export default ConnectUsApiService;
