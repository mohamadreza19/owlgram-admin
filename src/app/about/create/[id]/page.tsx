import { InputArrayFile1, InputTextArea1 } from "@/app/lib/components/form";
import FileInput from "@/app/lib/components/form/InputFile1";
import TextInput from "@/app/lib/components/form/InputText1";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react-pro";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useParams, useSearchParams } from "next/navigation";
import { FunctionComponent } from "react";
import * as Yup from "yup";

import {
  FormInitalValuesFactory,
  FormSchemaValidatorFactory,
} from "@/app/lib/services";
import { useLanguagesInjection } from "@/app/languages/languages.module";
import { useAboutInjection } from "../../about.module";
import Create from "../../Create";
import { StaticParams } from "@/app/lib/shared/interfaces";

interface CreateContentProps extends StaticParams {}

const CreateContent: FunctionComponent<CreateContentProps> = ({ params }) => {
  return <Create />;
};

export default CreateContent;
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
