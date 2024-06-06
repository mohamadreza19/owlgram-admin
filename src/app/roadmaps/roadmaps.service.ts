import GlobalStoreService from '@lib/services/GlobalStoreService';
import { InjectUseSelect } from '../lib/shared';
import { UseSelectMethod } from '../lib/shared/interfaces';
import { roadmapsActions } from './reducers/roadmaps.slice';
import { RoadmapsResponse } from './interfaces';

@InjectUseSelect('roadmaps')
class RoadmapsService extends GlobalStoreService {
  private useSelect!: UseSelectMethod<'roadmaps'>;

  setRoadmaps = (roadmaps: RoadmapsResponse) => {
    this.dispatch(roadmapsActions.set(roadmaps));
  };
  getRoadmaps = (asHook: boolean) => {
    return this.useSelect(asHook);
  };

  // Add service methods here
}
export default RoadmapsService;
