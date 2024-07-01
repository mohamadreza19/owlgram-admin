import ServicesService from "./services.service";
import ServicesController from "./services.controller";
import ServicesApiService from "./services.api";
import { ServicesInjectionEntities } from "./interfaces";
import { ModuleFactory } from "../lib/shared/interfaces";
import FilesApiService from "../files/files.api";
import { AlertService } from "../lib/services";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

class ServicesFactory implements ModuleFactory {
  static createInstances(router: AppRouterInstance): ServicesInjectionEntities {
    const servicesService = new ServicesService();
    const servicesController = new ServicesController(
      servicesService,
      new ServicesApiService(),
      new FilesApiService(),
      new AlertService(),
      router
    );
    return {
      servicesService,
      servicesController,
    };
  }
}
export default ServicesFactory;
