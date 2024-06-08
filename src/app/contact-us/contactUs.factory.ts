import ContactUsService from "./contactUs.service";
import ContactUsController from "./contactUs.controller";
import ContactUsApiService from "./contactUs.api";
import { ContactUsInjectionEntities } from "./interfaces";
import { ModuleFactory } from "../lib/shared/interfaces";
import SocialNetworksApiService from "../socialNetworks/socialNetworks.api";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { AlertService } from "../lib/services";

class ContactUsFactory implements ModuleFactory {
  static createInstances(
    router: AppRouterInstance
  ): ContactUsInjectionEntities {
    const contactUsService = new ContactUsService();
    const contactUsController = new ContactUsController(
      contactUsService,
      new ContactUsApiService(),
      new SocialNetworksApiService(),
      new AlertService(),
      router
    );
    return {
      contactUsService,
      contactUsController,
    };
  }
}
export default ContactUsFactory;
