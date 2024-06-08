import ContactUsService from "./contactUs.service";
import ContactUsApiService from "./contactUs.api";
import SocialNetworksApiService from "../socialNetworks/socialNetworks.api";
import { FormikCreate5 } from "../lib/shared/interfaces";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { AlertService } from "../lib/services";

class ContactUsController {
  constructor(
    private contactUsService: ContactUsService,
    private contactUsApiService: ContactUsApiService,
    private socialNetworksApiService: SocialNetworksApiService,
    private alertService: AlertService,
    private router: AppRouterInstance
  ) {}
  getContactBasedLanguageId = async (languageId: string) => {
    const result = await this.contactUsApiService.getContactUsByLanguageId(
      languageId
    );
    this.contactUsService.setContactUs(result);
  };
  getSocialNetworks = async () => {
    const result = await this.socialNetworksApiService.getSocialNetworks();

    return result;
  };
  handleCreateContactUs = async (values: FormikCreate5) => {
    await this.contactUsApiService.createContactUs(values);

    this.router.push("/languages");
    this.alertService.addDismissAlert({
      message: "Contact add successful",
      open: true,
      type: "success",
    });
  };

  // Add controller methods here
}
export default ContactUsController;
