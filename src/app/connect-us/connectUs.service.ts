import GlobalStoreService from "../lib/services/GlobalStoreService";
import { InjectUseSelect } from "../lib/shared";
import { UseSelectMethod } from "../lib/shared/interfaces";
import { ConnectUsResponse, DepartmentsResponse } from "./interfaces";
import { connectUsActions } from "./reducers/connectUs.slice";
import { departmentsActions } from "./reducers/departments.slice";

@InjectUseSelect("connectUs")
class ConnectUsService extends GlobalStoreService {
  private useSelect!: UseSelectMethod<"connectUs">;
  // Add service methods here

  setConnectUs = (connectUs: ConnectUsResponse) => {
    this.dispatch(connectUsActions.set(connectUs));
  };
  getConnectUs = (asHook: boolean) => {
    return this.useSelect(asHook).connectUs;
  };

  setDepartments = (departments: DepartmentsResponse) => {
    this.dispatch(departmentsActions.set(departments));
  };
  getDepartments = (asHook: boolean) => {
    return this.useSelect(asHook).departments;
  };
}
export default ConnectUsService;
