import ContactUsService from './contactUs.service';
import ContactUsApiService from './contactUs.api';

class ContactUsController {
  constructor(
    private contactUsService: ContactUsService,
    private contactUsApiService: ContactUsApiService
  ) {}
  getContactBasedLanguageId = async (languageId: string) => {
    const result = await this.contactUsApiService.getContactUsByLanguageId(
      languageId
    );
    this.contactUsService.setContactUs(result);
  };

  // Add controller methods here
}
export default ContactUsController;
