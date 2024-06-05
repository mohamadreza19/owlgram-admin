import ApiService from "../lib/services/api/ApiService";
import { PostFileResponse } from "./interfaces";

class FilesApiService extends ApiService {
  async PostFile(file: File) {
    const formData = new FormData();
    formData.append("bill", file);
    const result = (await this.$axios.post("/add_file", formData))
      .data as PostFileResponse;

    return `${result[0].id}.${result[0].type}`;
  }
}

export default FilesApiService;
