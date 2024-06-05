import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import FilesApiService from '../files/files.api';
import { AlertService } from '../lib/services';
import { FormikCreate3 } from '../lib/shared/interfaces';
import TeamsApiService from './teams.api';
import TeamsService from './teams.service';

class TeamsController {
  constructor(
    private teamsService: TeamsService,
    private teamsApiService: TeamsApiService,
    private filesApiService: FilesApiService,
    private alertService: AlertService,
    private router: AppRouterInstance
  ) {}

  handleSetTeamByLanguageId = async (id: string) => {
    const result = await this.teamsApiService.getTeams(id);

    this.teamsService.setTeams(result);
  };
  handleCreateTeamByLanguageId = async ({
    image,
    language_id,
    name,
    side,
  }: FormikCreate3) => {
    if (image) {
      const result = await this.filesApiService.PostFile(image);

      await this.teamsApiService.addTOTeam({
        image: result,
        language_id,
        name,
        side,
      });

      this.router.push('/languages');

      this.alertService.addDismissAlert({
        message: 'Team based language add successful',
        open: true,
        type: 'success',
      });
    }
  };

  // Add controller methods here
}
export default TeamsController;
