import GlobalStoreService from '../lib/services/GlobalStoreService';
import { InjectUseSelect } from '../lib/shared';
import { UseSelectMethod } from '../lib/shared/interfaces';

import { TeamsResponse } from './interfaces';
import { teamsActions } from './reducers/teams.slice';

@InjectUseSelect('teams')
class TeamsService extends GlobalStoreService {
  private useSelect!: UseSelectMethod<'teams'>;
  // Add service methods here

  setTeams = (teams: TeamsResponse) => {
    this.dispatch(teamsActions.set(teams));
  };
  getTeams = (asHook: boolean) => {
    return this.useSelect(asHook);
  };
}
export default TeamsService;
