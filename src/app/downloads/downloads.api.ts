import ApiService from "../lib/services/api/ApiService";
import { CreateDownload, Download, DownloadsResponse } from "./interfaces";

class DownloadsApiService extends ApiService {
  async getDownloadsByLanguageId(
    language_id: string
  ): Promise<DownloadsResponse> {
    const result = await this.$axios.get(
      "/getDownload?language_id=" + language_id
    );

    return result.data;
  }
  createDownloadsByLanguageId = async (body: CreateDownload) => {
    this.$axios.post("createDownload", this.jsonToFormData(body));
  };
}

export default DownloadsApiService;
