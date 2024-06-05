import ApiService from "../lib/services/api/ApiService";
import { LoginPostBody, LoginResponse } from "./interfaces";

class LoginApiService extends ApiService {
  async getLogin(body: LoginPostBody): Promise<LoginResponse> {
    const result = await this.$axios.post("/login", body);

    return result.data;
  }
}

export default LoginApiService;
