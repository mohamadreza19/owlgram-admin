export const dynamic = "force-static";
import { Error1, InputNum1, InputTextArea1 } from "@/app/lib/components/form";
import TextInput from "@/app/lib/components/form/InputText1";
import TextArea1 from "@/app/lib/components/form/InputTextArea1";
import Map1 from "@/app/lib/components/map/Map1";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react-pro";
import {
  FormInitalValuesFactory,
  FormSchemaValidatorFactory,
} from "@lib/services";
import { useFormik } from "formik";
import { useParams, useSearchParams } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import { useContactUsInjection } from "../../contactUs.module";
import { SocialNetworksResponse } from "@/app/socialNetworks/interfaces";
import Image from "next/image";
import { SocialNetworkLink, StaticParams } from "@/app/lib/shared/interfaces";
import Create from "../../Create";

interface CreateProps extends StaticParams {}

const CreateContactUs: FunctionComponent<CreateProps> = ({ params }) => {
  return <Create />;
};

export default CreateContactUs;

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
