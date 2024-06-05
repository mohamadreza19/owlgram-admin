import LoginService from "./login.service";
import LoginController from "./login.controller";
import LoginApiService from "./login.api";
import { LoginInjectionEntities } from "./interfaces";
import { ModuleFactory } from "@lib/shared/interfaces";
import { TokenStorageService } from "@lib/services";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

class LoginFactory implements ModuleFactory {
  static createInstances(router: AppRouterInstance): LoginInjectionEntities {
    const loginService = new LoginService();
    const loginController = new LoginController(
      loginService,
      new LoginApiService(),
      new TokenStorageService(),
      router
    );
    return {
      loginService,
      loginController,
    };
  }
}
export default LoginFactory;
