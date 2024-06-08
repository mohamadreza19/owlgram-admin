import ApiService from "../lib/services/api/ApiService";
import { SocialNetworksResponse } from "./interfaces";

class SocialNetworksApiService extends ApiService {
  async getSocialNetworks(): Promise<SocialNetworksResponse> {
    const result = await this.$axios.get("/socialNetworks");

    return result.data;
  }
}

export default SocialNetworksApiService;
