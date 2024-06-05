import {
  FormikCreate2,
  FormikCreateAboutOwlgramBasedLanguageId,
  FormikCreatelanguage,
} from "@/app/languages/interfaces";

class FormInitalValuesFactory {
  static createInitalValues1() {
    const initialValues: FormikCreatelanguage = {
      title: "",
      file: null,
    };

    return initialValues;
  }
  static createInitalValues2(language_id: string) {
    const initialValues: FormikCreateAboutOwlgramBasedLanguageId = {
      language_id: language_id,
      content: "",
      media: [],
    };

    return initialValues;
  }
  static createInitalValues3(language_id: string) {
    const initialValues: FormikCreate2 = {
      language_id: language_id,
      content: "",
      media:null,
    };

    return initialValues;
  }
}

export default FormInitalValuesFactory;
