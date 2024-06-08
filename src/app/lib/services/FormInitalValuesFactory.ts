import {
  FormikCreateAboutOwlgramBasedLanguageId,
  FormikCreatelanguage,
} from "@/app/languages/interfaces";
import {
  FormikCreate2,
  FormikCreate3,
  FormikCreate4,
  FormikCreate5,
  FormikCreate6,
  FormikCreate7,
  FormikCreate8,
} from "../shared/interfaces";

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
      media: null,
    };

    return initialValues;
  }
  static createInitalValues4(language_id: string) {
    const initialValues: FormikCreate3 = {
      language_id: language_id,
      name: "",
      image: null,
      side: "",
    };

    return initialValues;
  }
  static createInitalValues5() {
    const initialValues: FormikCreate4 = {
      map: null,
    };

    return initialValues;
  }
  static createInitalValues6(language_id: string) {
    const initialValues: FormikCreate5 = {
      address: "",
      language_id: language_id,
      lat: "",
      long: "",
      tel: "",
      socialNetworks: [],
    };

    return initialValues;
  }
  static createInitalValues7(language_id: string) {
    const initialValues: FormikCreate6 = {
      image: null,
      language_id: language_id,
      link: "",
      os_name: "",
      product: "",
    };

    return initialValues;
  }
  static createInitalValues8(department_id: string) {
    const initialValues: FormikCreate7 = {
      content: "",
      department_id: department_id,
      email: "",
      file: null,
      subject: "",
    };

    return initialValues;
  }
  static createInitalValues9(language_id: string) {
    const initialValues: FormikCreate8 = {
      answer: "",
      language_id: language_id,
      question: "",
    };

    return initialValues;
  }
}

export default FormInitalValuesFactory;
