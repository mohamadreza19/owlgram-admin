import ConnectUsService from "./connectUs.service";
import ConnectUsController from "./connectUs.controller";
export type ConnectUs = {
  email: string;
  subject: string;
  content: string;
  file: string;
  department: string;
};
export type ConnectUsResponse = ConnectUs[];
export type DepartmentsResponse = {
  title: string;
  id: string;
}[];
export interface CreateConnectUs extends Omit<ConnectUs, "department"> {
  department_id: string;
}
export interface ConnectUsInjectionEntities {
  connectUsService: ConnectUsService;
  connectUsController: ConnectUsController;
}
