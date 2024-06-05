import GlobalStoreService from '../lib/services/GlobalStoreService';
import { InjectUseSelect } from '../lib/shared';
import { UseSelectMethod } from '../lib/shared/interfaces';

import { GetServiceResponse, Service } from './interfaces';
import { servicesActions } from './reducers/services.slice';

@InjectUseSelect('services')
class ServicesService extends GlobalStoreService {
  // Add service methods here
  private useSelect!: UseSelectMethod<'services'>;

  setServices = (services: GetServiceResponse) => {
    this.dispatch(servicesActions.set(services));
  };
  getServices = (asHook: boolean) => {
    return this.useSelect(asHook);
  };
}
export default ServicesService;
