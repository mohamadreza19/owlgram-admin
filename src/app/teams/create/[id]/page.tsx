import { Error1, InputTextArea1 } from "@/app/lib/components/form";
import FileInput from "@/app/lib/components/form/InputFile1";
import TextInput from "@/app/lib/components/form/InputText1";
import {
  FormInitalValuesFactory,
  FormSchemaValidatorFactory,
} from "@/app/lib/services";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react-pro";
import { useFormik } from "formik";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { FunctionComponent, useEffect } from "react";
import { useTeamsInjection } from "../../teams.module";
import Create from "../../Create";
import { StaticParams } from "@/app/lib/shared/interfaces";

interface CreateTeamProps extends StaticParams {}

const CreateTeam: FunctionComponent<CreateTeamProps> = ({ params }) => {
  return <Create />;
};

export default CreateTeam;
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
