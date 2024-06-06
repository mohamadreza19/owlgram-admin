

import MrZarService from "./mrZar.service";
import MrZarController from "./mrZar.controller";
import MrZarApiService from "./mrZar.api";
import { MrZarInjectionEntities } from "./interfaces";


class MrZarFactory implements ModuleFactory {
  static createInstances(): MrZarInjectionEntities {
    const mrZarService = new MrZarService();
    const mrZarController = new MrZarController(
      mrZarService,
      new MrZarApiService()
    );
    return {
      mrZarService,
      mrZarController,
    };
  }
}
export default MrZarFactory;

