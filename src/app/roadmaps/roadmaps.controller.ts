import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import FilesApiService from '../files/files.api';
import { FormikCreate4 } from '../lib/shared/interfaces';
import RoadmapsApiService from './roadmaps.api';
import RoadmapsService from './roadmaps.service';
import { AlertService } from '../lib/services';

class RoadmapsController {
  constructor(
    private roadmapsService: RoadmapsService,
    private roadmapsApiService: RoadmapsApiService,
    private filesApiService: FilesApiService,
    private router: AppRouterInstance,
    private alertService: AlertService
  ) {}
  handleFetchRoadmaps = async () => {
    const result = await this.roadmapsApiService.getRoadmaps();

    this.roadmapsService.setRoadmaps(result);
  };
  handleCreateRoadmap = async ({ map }: FormikCreate4) => {
    if (map) {
      const result = await this.filesApiService.PostFile(map);

      await this.roadmapsApiService.postRoadmaps({ map: result });

      this.router.push('/roadmaps');

      this.alertService.addDismissAlert({
        open: true,
        type: 'success',
        message: 'Roadmap add successful',
      });
    }
  };

  // Add controller methods here
}
export default RoadmapsController;
