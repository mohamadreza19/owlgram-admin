import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import AppService from "./app.service";
import { TokenStorageService } from "./lib/services";

class AppController {
  constructor(
    private appService: AppService,
    private tokenStorageService: TokenStorageService,
    router: AppRouterInstance
  ) {}

  // Add controller methods here
}
export default AppController;
