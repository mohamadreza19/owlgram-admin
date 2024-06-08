import DownloadsService from "./downloads.service";
import DownloadsController from "./downloads.controller";
import DownloadsApiService from "./downloads.api";
import { DownloadsInjectionEntities } from "./interfaces";
import { ModuleFactory } from "../lib/shared/interfaces";
import FilesApiService from "../files/files.api";
import { AlertService } from "../lib/services";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

class DownloadsFactory implements ModuleFactory {
  static createInstances(
    router: AppRouterInstance
  ): DownloadsInjectionEntities {
    const downloadsService = new DownloadsService();
    const downloadsController = new DownloadsController(
      downloadsService,
      new DownloadsApiService(),
      new FilesApiService(),
      new AlertService(),
      router
    );
    return {
      downloadsService,
      downloadsController,
    };
  }
}
export default DownloadsFactory;
