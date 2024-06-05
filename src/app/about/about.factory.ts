import AboutService from "./about.service";
import AboutController from "./about.controller";
import AboutApiService from "./about.api";
import { AboutInjectionEntities } from "./interfaces";
import { ModuleFactory } from "../lib/shared/interfaces";
import FilesApiService from "../files/files.api";
import { AlertService } from "../lib/services";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

class AboutFactory implements ModuleFactory {
  static createInstances(router: AppRouterInstance): AboutInjectionEntities {
    const aboutService = new AboutService();
    const aboutController = new AboutController(
      aboutService,
      new AboutApiService(),
      new FilesApiService(),
      new AlertService(),
      router
    );
    return {
      aboutService,
      aboutController,
    };
  }
}
export default AboutFactory;
