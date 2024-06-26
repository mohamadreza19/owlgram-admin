import { configureStore } from "@reduxjs/toolkit";
import { DismissAlert, ListAlerts } from "../features/alert";
import { PluseLoading } from "../features/loading";
import { theme } from "../features/theme";

import apiCallStatus from "../features/apiCallStatus/apiCallStatus";
import languages from "@/app/languages/reducers/languages.slice";
import about from "@/app/about/reducers/about.slice";
import services from "@/app/services/reducers/services.slice";
import teams from "@/app/teams/reducers/teams.slice";
import { roadmaps } from "@/app/roadmaps/reducers/roadmaps.slice";
import { contactUs } from "@/app/contact-us/reducers/contactUs.slice";
import downloads from "@/app/downloads/reducers";
import connectUs from "@/app/connect-us/reducers";
import questionAnswer from "@/app/question-answer/reducers";
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
    teams,
    roadmaps,
    contactUs,
    downloads,
    connectUs,
    questionAnswer,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
