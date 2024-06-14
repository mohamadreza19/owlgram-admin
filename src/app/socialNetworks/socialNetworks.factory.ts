import SocialNetworksService from "./socialNetworks.service";
import SocialNetworksController from "./socialNetworks.controller";
import SocialNetworksApiService from "./socialNetworks.api";
import { SocialNetworksInjectionEntities } from "./interfaces";
import { ModuleFactory } from "../lib/shared/interfaces";

class SocialNetworksFactory implements ModuleFactory {
  static createInstances(): SocialNetworksInjectionEntities {
    const socialNetworksService = new SocialNetworksService();
    const socialNetworksController = new SocialNetworksController(
      socialNetworksService,
      new SocialNetworksApiService()
    );
    return {
      socialNetworksService,
      socialNetworksController,
    };
  }
}
export default SocialNetworksFactory;
