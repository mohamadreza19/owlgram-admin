import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FormikCreate2 } from "../lib/shared/interfaces";
import ServicesApiService from "./services.api";
import ServicesService from "./services.service";
import { AlertService } from "../lib/services";
import FilesApiService from "../files/files.api";

class ServicesController {
  constructor(
    private servicesService: ServicesService,
    private servicesApiService: ServicesApiService,
    private filesApiService: FilesApiService,
    private alertService: AlertService,
    private router: AppRouterInstance
  ) {}

  handleFetchServiceBasedLanguageId = async (languageId: string) => {
    const result = await this.servicesApiService.getServiceBasedLanguagedId(
      languageId
    );

    this.servicesService.setServices(result);
  };
  handleCreateServiceBasedLanguageId = async ({
    content,
    language_id,
    media,
  }: FormikCreate2) => {
    if (media) {
      const result = await this.filesApiService.PostFile(media);

      await this.servicesApiService.createServiceBasedLanguagedId({
        content,
        language_id,
        media: result,
      });
      this.router.push("/languages");

      this.alertService.addDismissAlert({
        message: "Service based language add successful",
        open: true,
        type: "success",
      });
    }
  };
  // Add controller methods here
}
export default ServicesController;
