import ContactUsService from './contactUs.service';
import ContactUsController from './contactUs.controller';
import { SocialNetworks } from '../lib/shared/interfaces';
export type ContactUs = {
  address: string;
  tel: string;
  lat: string;
  long: string;
  social_networks: SocialNetworks[];
};
export type ContactUsResponse = ContactUs[];

export interface ContactUsInjectionEntities {
  contactUsService: ContactUsService;
  contactUsController: ContactUsController;
}
