import ServicesService from "./services.service";
import ServicesController from "./services.controller";
export type ServicesResponse = {};
export type Service = {
  content: string;
  media: string;
};
export type GetServiceResponse = Service[];
export type CreateService = {
  content: string;
  language_id: string;
  media: string;
};

export interface ServicesInjectionEntities {
  servicesService: ServicesService;
  servicesController: ServicesController;
}
