import DownloadsService from "./downloads.service";
import DownloadsApiService from "./downloads.api";
import { FormikCreate6 } from "../lib/shared/interfaces";
import FilesApiService from "../files/files.api";
import { AlertService } from "../lib/services";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

class DownloadsController {
  constructor(
    private downloadsService: DownloadsService,
    private downloadsApiService: DownloadsApiService,
    private filesApiService: FilesApiService,
    private alertService: AlertService,
    private router: AppRouterInstance
  ) {}

  handleFetchDownloadsByLanguageId = async (languageId: string) => {
    const result = await this.downloadsApiService.getDownloadsByLanguageId(
      languageId
    );
    this.downloadsService.setDownloads(result);
  };
  handleCreateDownloadsByLanguageId = async ({
    image,
    language_id,
    link,
    os_name,
    product,
  }: FormikCreate6) => {
    if (image) {
      const stringFile = await this.filesApiService.PostFile(image);
      await this.downloadsApiService.createDownloadsByLanguageId({
        image: stringFile,
        link,
        os_name,
        product,
        language_id: language_id,
      });

      this.router.push("/languages");

      this.alertService.addDismissAlert({
        message: "Download part add successful",
        open: true,
        type: "success",
      });
    }
  };

  // Add controller methods here
}
export default DownloadsController;
