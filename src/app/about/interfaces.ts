import AboutService from "./about.service";
import AboutController from "./about.controller";
export type AboutResponse = {};

export type AboutOwlgram = {
  content: string;
  media: string[];
};
export type AboutOwlgramByLanguageIdResponse = AboutOwlgram[];

export interface AboutInjectionEntities {
  aboutService: AboutService;
  aboutController: AboutController;
}

export type CreateAboutOwlgramBasedLanguageId = {
  language_id: string;
  content: string;
  media: string[];
};
export interface FormikCreateAboutOwlgramBasedLanguageId {
  language_id: string;
  content: string;
  media: File[];
}
export interface FormikCreateAboutOwlgramBasedLanguageId {
  language_id: string;
  content: string;
  media: File[];
}
