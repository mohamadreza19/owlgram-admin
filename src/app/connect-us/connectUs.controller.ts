import ConnectUsService from "./connectUs.service";
import ConnectUsApiService from "./connectUs.api";
import { FormikCreate7 } from "../lib/shared/interfaces";
import FilesApiService from "../files/files.api";
import { AlertService } from "../lib/services";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

class ConnectUsController {
  constructor(
    private connectUsService: ConnectUsService,
    private connectUsApiService: ConnectUsApiService,
    private filesApiService: FilesApiService,
    private alertService: AlertService,
    private router: AppRouterInstance
  ) {}
  fetchConnectUs = async () => {
    const result = await this.connectUsApiService.getConnectUs();

    this.connectUsService.setConnectUs(result);
  };
  handleFetchDepartmentsBasedLanguageId = async (language_id: string) => {
    const result = await this.connectUsApiService.getDepartmentsBasedLanguageId(
      language_id
    );

    this.connectUsService.setDepartments(result);
  };
  handleCreateConnectUs = async ({
    content,
    department_id,
    email,
    file,
    subject,
  }: FormikCreate7) => {
    if (file) {
      const stringFile = await this.filesApiService.PostFile(file);
      await this.connectUsApiService.createConnectUs({
        file: stringFile,
        content,
        department_id,
        email,
        subject,
      });

      this.router.push("/connect-us");

      this.alertService.addDismissAlert({
        open: true,
        type: "success",
        message: "Connect us part add successful",
      });
    }
  };
  // Add controller methods here
}
export default ConnectUsController;
