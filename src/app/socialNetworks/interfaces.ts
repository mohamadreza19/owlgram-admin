import SocialNetworksService from "./socialNetworks.service";
import SocialNetworksController from "./socialNetworks.controller";
import { SocialNetwork } from "../lib/shared/interfaces";
export type SocialNetworksResponse = SocialNetwork[];

export interface SocialNetworksInjectionEntities {
  socialNetworksService: SocialNetworksService;
  socialNetworksController: SocialNetworksController;
}
