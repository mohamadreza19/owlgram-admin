import { configureStore } from "@reduxjs/toolkit";
import { DismissAlert, ListAlerts } from "../features/alert";
import { PluseLoading } from "../features/loading";
import { theme } from "../features/theme";

import apiCallStatus from "../features/apiCallStatus/apiCallStatus";
import languages from "@/app/languages/reducers/languages.slice";
import about from "@/app/about/reducers/about.slice";
import services from "@/app/services/reducers/services.slice";

const store = configureStore({
  reducer: {
    apiCallStatus,
    list_alerts: ListAlerts.reducer,
    dismiss_alert: DismissAlert.reducer,
    pluse_loading: PluseLoading.reducer,
    theme,
    languages,
    about,
    services,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
