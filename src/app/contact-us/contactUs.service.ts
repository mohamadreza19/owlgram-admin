import GlobalStoreService from '../lib/services/GlobalStoreService';
import { InjectUseSelect } from '../lib/shared';
import { UseSelectMethod } from '../lib/shared/interfaces';
import { ContactUsResponse } from './interfaces';
import { contactUsActions } from './reducers/contactUs.slice';

@InjectUseSelect('contactUs')
class ContactUsService extends GlobalStoreService {
  private useSelect!: UseSelectMethod<'contactUs'>;
  // Add service methods here

  setContactUs = (values: ContactUsResponse) => {
    this.dispatch(contactUsActions.set(values));
  };
  getContactUs = (asHook: boolean) => {
    return this.useSelect(asHook);
  };
}
export default ContactUsService;
