import AppService from "./app.service";
import AppController from "./app.controller";
import AppApiService from "./app.api";
import { AppInjectionEntities } from "./interfaces";
import { ModuleFactory } from "@lib/shared/interfaces";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import ThemeFactory from "./theme/theme.factory";
import { TokenStorageService } from "./lib/services";
import LoginFactory from "./login/login.factory";

class AppFactory implements ModuleFactory {
  private static singletonInstance: AppInjectionEntities | null;
  static createInstances(router: AppRouterInstance): AppInjectionEntities {
    if (!this.singletonInstance) {
      const appService = new AppService();
      const appController = new AppController(
        appService,
        new TokenStorageService(),
        router
      );

      this.singletonInstance = {
        ...LoginFactory.createInstances(router),
        ...ThemeFactory.createInstances(),
      };
    }

    return this.singletonInstance;
  }
}
export default AppFactory;
