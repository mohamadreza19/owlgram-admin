import GlobalStoreService from '../lib/services/GlobalStoreService';
import { InjectUseSelect } from '../lib/shared';
import { UseSelectMethod } from '../lib/shared/interfaces';

import { AboutOwlgramByLanguageIdResponse } from './interfaces';
import { aboutActions } from './reducers/about.slice';
@InjectUseSelect('about')
class AboutService extends GlobalStoreService {
  private useSelect!: UseSelectMethod<'about'>;

  setAboutLanguage = (about: AboutOwlgramByLanguageIdResponse) => {
    this.dispatch(aboutActions.set(about));
  };

  getAboutLanguage = (asHook: boolean) => {
    return this.useSelect(asHook);
  };
  // Add service methods here
}
export default AboutService;
