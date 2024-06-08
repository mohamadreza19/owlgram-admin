import ContactUsService from "./contactUs.service";
import ContactUsController from "./contactUs.controller";

export type ContactUs = {
  address: string;
  tel: string;
  lat: string;
  long: string;
  social_networks: {
    social_id: string;
    link: string;
  }[];
};
export type ContactUsResponse = ContactUs[];

export interface ContactUsInjectionEntities {
  contactUsService: ContactUsService;
  contactUsController: ContactUsController;
}
