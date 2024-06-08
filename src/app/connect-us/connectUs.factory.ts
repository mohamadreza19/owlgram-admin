import ConnectUsService from "./connectUs.service";
import ConnectUsController from "./connectUs.controller";
import ConnectUsApiService from "./connectUs.api";
import { ConnectUsInjectionEntities } from "./interfaces";
import { ModuleFactory } from "../lib/shared/interfaces";
import FilesApiService from "../files/files.api";
import { AlertService } from "../lib/services";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

class ConnectUsFactory implements ModuleFactory {
  static createInstances(
    router: AppRouterInstance
  ): ConnectUsInjectionEntities {
    const connectUsService = new ConnectUsService();
    const connectUsController = new ConnectUsController(
      connectUsService,
      new ConnectUsApiService(),
      new FilesApiService(),
      new AlertService(),
      router
    );
    return {
      connectUsService,
      connectUsController,
    };
  }
}
export default ConnectUsFactory;
