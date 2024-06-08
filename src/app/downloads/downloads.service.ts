import GlobalStoreService from "../lib/services/GlobalStoreService";
import { InjectUseSelect } from "../lib/shared";
import { UseSelectMethod } from "../lib/shared/interfaces";
import { DownloadsResponse } from "./interfaces";
import { downloadsActions } from "./reducers/downloads.slice";

@InjectUseSelect("downloads")
class DownloadsService extends GlobalStoreService {
  private useSelect!: UseSelectMethod<"downloads">;
  // Add service methods here

  setDownloads = (values: DownloadsResponse) => {
    this.dispatch(downloadsActions.set(values));
  };
  getDownloads = (asHook: boolean) => {
    return this.useSelect(asHook).downloads;
  };
}
export default DownloadsService;
