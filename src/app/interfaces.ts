import { LoginInjectionEntities } from "./login/interfaces";
import { ThemeInjectionEntities } from "./theme/interfaces";

export type AppResponse = {};

export interface AppInjectionEntities
  extends ThemeInjectionEntities,
    LoginInjectionEntities {}
