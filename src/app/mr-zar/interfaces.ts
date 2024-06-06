
import MrZarService from "./mrZar.service";
import MrZarController from "./mrZar.controller";
export type MrZarResponse={}

export interface  MrZarInjectionEntities  {
  mrZarService:  MrZarService;
  mrZarController:  MrZarController;
  }
