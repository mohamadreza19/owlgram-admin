import RoadmapsService from './roadmaps.service';
import RoadmapsController from './roadmaps.controller';
import RoadmapsApiService from './roadmaps.api';
import { RoadmapsInjectionEntities } from './interfaces';
import { ModuleFactory } from '../lib/shared/interfaces';
import FilesApiService from '../files/files.api';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { AlertService } from '../lib/services';

class RoadmapsFactory implements ModuleFactory {
  static createInstances(router: AppRouterInstance): RoadmapsInjectionEntities {
    const roadmapsService = new RoadmapsService();
    const roadmapsController = new RoadmapsController(
      roadmapsService,
      new RoadmapsApiService(),
      new FilesApiService(),
      router,
      new AlertService()
    );
    return {
      roadmapsService,
      roadmapsController,
    };
  }
}
export default RoadmapsFactory;
