import LanguagesService from './languages.service';
import LanguagesController from './languages.controller';
export type Language = {
  title: string;
  flag: string;
  id: string;
};

export type Createlanguage = {
  title: string;
  flag: string;
};
export type FormikCreatelanguage = {
  title: string;
  file: File | null;
};
export type LanguagesResponse = Language[];

export type AboutOwlgram = {
  content: string;
  media: string[];
};
export type AboutOwlgramByLanguageIdResponse = AboutOwlgram[];

export type CreateAboutOwlgramBasedLanguageId = {
  language_id: string;
  content: string;
  media: string[];
};

export interface BodyShared2 {
  language_id: string;
  content: string;
  media: string;
}
export interface FormikCreateAboutOwlgramBasedLanguageId {
  language_id: string;
  content: string;
  media: File[];
}

export interface LanguagesInjectionEntities {
  languagesService: LanguagesService;
  languagesController: LanguagesController;
}
