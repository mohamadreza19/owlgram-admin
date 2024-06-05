
import ThemeService from "./theme.service";
import ThemeController from "./theme.controller";
export type ThemeResponse={}

export interface  ThemeInjectionEntities  {
  themeService:  ThemeService;
  themeController:  ThemeController;
  }
