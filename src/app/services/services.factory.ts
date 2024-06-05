import ServicesService from "./services.service";
import ServicesController from "./services.controller";
import ServicesApiService from "./services.api";
import { ServicesInjectionEntities } from "./interfaces";
import { ModuleFactory } from "../lib/shared/interfaces";

class ServicesFactory implements ModuleFactory {
  static createInstances(): ServicesInjectionEntities {
    const servicesService = new ServicesService();
    const servicesController = new ServicesController(
      servicesService,
      new ServicesApiService()
    );
    return {
      servicesService,
      servicesController,
    };
  }
}
export default ServicesFactory;
