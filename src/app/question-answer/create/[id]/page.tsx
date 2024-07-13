import { FunctionComponent } from "react";
import { useQuestionAnswerInjection } from "../../questionAnswer.module";
import { useParams, useSearchParams } from "next/navigation";
import { useFormik } from "formik";
import {
  FormInitalValuesFactory,
  FormSchemaValidatorFactory,
} from "@/app/lib/services";
import TextArea1 from "@/app/lib/components/form/InputTextArea1";
import { Error1 } from "@/app/lib/components/form";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react-pro";
import Create from "../../Create";
import { StaticParams } from "@/app/lib/shared/interfaces";

interface CreateQAProps extends StaticParams {}

const CreateQA: FunctionComponent<CreateQAProps> = ({ params }) => {
  return <Create />;
};

export default CreateQA;
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
