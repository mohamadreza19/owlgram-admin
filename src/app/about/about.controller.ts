import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import FilesApiService from "../files/files.api";
import { AlertService } from "../lib/services";
import AboutApiService from "./about.api";
import AboutService from "./about.service";
import { FormikCreateAboutOwlgramBasedLanguageId } from "./interfaces";

class AboutController {
  constructor(
    private aboutService: AboutService,
    private aboutApiService: AboutApiService,
    private filesApiService: FilesApiService,
    private alertService: AlertService,
    private router: AppRouterInstance
  ) {}
  handleCreateAboutOwlgramBasedLanguageId = async ({
    content,
    language_id,
    media,
  }: FormikCreateAboutOwlgramBasedLanguageId) => {
    const postFilepromises = media.map((file) =>
      this.filesApiService.PostFile(file)
    );

    const responses = await Promise.all(postFilepromises);

    await this.aboutApiService.createAboutOwlgramBasedLanguageId({
      content,
      language_id,
      media: responses,
    });
    this.router.push("/languages");

    this.alertService.addDismissAlert({
      message: "Content for aboutOwlegram based language add successful",
      open: true,
      type: "success",
    });
  };
  handleFetchAboutLanguageById = async (id: string) => {
    const result = await this.aboutApiService.getAboutOwlgramByLanguageId(id);

    this.aboutService.setAboutLanguage(result);
  };
  // Add controller methods here
}
export default AboutController;
