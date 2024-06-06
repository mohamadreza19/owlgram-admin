

import { MrZarResponse} from "./interfaces";

class MrZarApiService extends ApiService {
  constructor() {
    super("mrZar");
  }
  async getMrZar(): Promise<MrZarResponse> {
    const result = await this.$axios.get("/");

    return result.data;
  }
 
}

export default MrZarApiService;
