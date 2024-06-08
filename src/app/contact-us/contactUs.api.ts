import ApiService from "../lib/services/api/ApiService";
import { FormikCreate5 } from "../lib/shared/interfaces";
import { ContactUsResponse } from "./interfaces";

class ContactUsApiService extends ApiService {
  async getContactUsByLanguageId(
    languageId: string
  ): Promise<ContactUsResponse> {
    const result = await this.$axios.get(
      "/contactUs?language_id=" + languageId
    );

    return result.data;
  }
  createContactUs = async (values: FormikCreate5) => {
    return this.$axios.post("/createContactUs", this.jsonToFormData(values));
  };
}

export default ContactUsApiService;
