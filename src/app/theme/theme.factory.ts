import ThemeService from "./theme.service";
import ThemeController from "./theme.controller";

import { ThemeInjectionEntities } from "./interfaces";
import { ModuleFactory } from "../lib/shared/interfaces";

class ThemeFactory implements ModuleFactory {
  private static singletonInstance: ThemeInjectionEntities | null;
  static createInstances(): ThemeInjectionEntities {
    const themeService = new ThemeService();
    const themeController = new ThemeController(themeService);

    if (!this.singletonInstance) {
      this.singletonInstance = {
        themeService,
        themeController,
      };
    }
    return this.singletonInstance;
  }
}
export default ThemeFactory;
