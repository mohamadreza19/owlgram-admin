import ApiService from '../lib/services/api/ApiService';
import { ContactUsResponse } from './interfaces';

class ContactUsApiService extends ApiService {
  async getContactUsByLanguageId(
    languageId: string
  ): Promise<ContactUsResponse> {
    const result = await this.$axios.get(
      '/contactUs?language_id=' + languageId
    );

    return result.data;
  }
}

export default ContactUsApiService;
