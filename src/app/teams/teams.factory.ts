import TeamsService from './teams.service';
import TeamsController from './teams.controller';
import TeamsApiService from './teams.api';
import { TeamsInjectionEntities } from './interfaces';
import { ModuleFactory } from '../lib/shared/interfaces';
import FilesApiService from '../files/files.api';
import { AlertService } from '../lib/services';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

class TeamsFactory implements ModuleFactory {
  static createInstances(router: AppRouterInstance): TeamsInjectionEntities {
    const teamsService = new TeamsService();
    const teamsController = new TeamsController(
      teamsService,
      new TeamsApiService(),
      new FilesApiService(),
      new AlertService(),
      router
    );
    return {
      teamsService,
      teamsController,
    };
  }
}
export default TeamsFactory;
