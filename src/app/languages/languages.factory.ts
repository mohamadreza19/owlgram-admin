import LanguagesService from "./languages.service";
import LanguagesController from "./languages.controller";
import LanguagesApiService from "./languages.api";
import { LanguagesInjectionEntities } from "./interfaces";
import { ModuleFactory } from "../lib/shared/interfaces";
import FilesApiService from "../files/files.api";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { AlertService } from "../lib/services";

class LanguagesFactory implements ModuleFactory {
  static createInstances(
    router: AppRouterInstance
  ): LanguagesInjectionEntities {
    const languagesService = new LanguagesService();
    const languagesController = new LanguagesController(
      languagesService,
      new LanguagesApiService(),
      new FilesApiService(),
      new AlertService(),
      router
    );
    return {
      languagesService,
      languagesController,
    };
  }
}
export default LanguagesFactory;
