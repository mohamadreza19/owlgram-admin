import GlobalStoreService from '@lib/services/GlobalStoreService';
import { InjectUseSelect } from '@lib/shared';

import {
  AboutOwlgramByLanguageIdResponse,
  LanguagesResponse,
} from './interfaces';
import { languagesActions } from './reducers/languages.slice';
import { aboutLanguageActions } from './reducers/aboutLanguage.slice';
import { UseSelectMethod } from '../lib/shared/interfaces';
@InjectUseSelect('languages')
class LanguagesService extends GlobalStoreService {
  // Add service methods here
  private useSelect!: UseSelectMethod<'languages'>;
  setLanguages = (languages: LanguagesResponse) => {
    this.dispatch(languagesActions.add(languages));
  };
  getLanguages = (asHook: boolean) => {
    return this.useSelect(asHook);
  };
  setAboutLanguage = (aboutLanguage: AboutOwlgramByLanguageIdResponse) => {
    this.dispatch(aboutLanguageActions.set(aboutLanguage));
  };

  getAboutLanguage = () => {
    return [];
  };
}
export default LanguagesService;
