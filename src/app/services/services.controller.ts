import ServicesApiService from "./services.api";
import ServicesService from "./services.service";

class ServicesController {
  constructor(
    private servicesService: ServicesService,
    private servicesApiService: ServicesApiService
  ) {}

  handleFetchServiceBasedLanguageId = async (languageId: string) => {
    const result = await this.servicesApiService.getServiceBasedLanguagedId(
      languageId
    );

    this.servicesService.setServices(result);
  };
  // Add controller methods here
}
export default ServicesController;
