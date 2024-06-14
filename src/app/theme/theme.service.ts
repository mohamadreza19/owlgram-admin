import GlobalStoreService from "@lib/services/GlobalStoreService";
import { InjectUseSelect } from "@lib/shared";

import { themeSliceActions } from "@lib/features/theme/theme";
import { UseSelectMethod } from "@lib/shared/interfaces";
@InjectUseSelect("theme")
class ThemeService extends GlobalStoreService {
  private useSelect!: UseSelectMethod<"theme">;
  // Add service methods here

  getSideBar = (asHock: boolean) => {
    return this.useSelect(asHock).isSidebarOpen;
  };
  toggleSideBar = () => {
    this.dispatch(themeSliceActions.toggleSideBar());
  };
  openSide = () => {
    this.dispatch(themeSliceActions.openSideBar());
  };
  closeSide = () => {
    this.dispatch(themeSliceActions.closeSideBar());
  };
}
export default ThemeService;
