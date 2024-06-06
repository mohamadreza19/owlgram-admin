import ContactUsService from './contactUs.service';
import ContactUsController from './contactUs.controller';
import ContactUsApiService from './contactUs.api';
import { ContactUsInjectionEntities } from './interfaces';
import { ModuleFactory } from '../lib/shared/interfaces';

class ContactUsFactory implements ModuleFactory {
  static createInstances(): ContactUsInjectionEntities {
    const contactUsService = new ContactUsService();
    const contactUsController = new ContactUsController(
      contactUsService,
      new ContactUsApiService()
    );
    return {
      contactUsService,
      contactUsController,
    };
  }
}
export default ContactUsFactory;
