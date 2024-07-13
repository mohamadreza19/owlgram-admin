"use client";
export const dynamic = "force-static";
import { Error1, InputTextArea1 } from "@/app/lib/components/form";
import FileInput from "@/app/lib/components/form/InputFile1";
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
import { Field, useFormik } from "formik";
import { useParams, useSearchParams } from "next/navigation";
import { FunctionComponent } from "react";
import { useServicesInjection } from "../services.module";

interface CreateProps {}

const Create: FunctionComponent<CreateProps> = () => {
  const { servicesController } = useServicesInjection();
  const { id } = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const lan = searchParams.get("lan");
  const formik = useFormik({
    initialValues: FormInitalValuesFactory.createInitalValues3(id),
    validationSchema: FormSchemaValidatorFactory.createSchema3(),
    onSubmit: servicesController.handleCreateServiceBasedLanguageId,
  });

  return (
    <CRow className="container">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h1 className="py-3 text-gray-700">
              Create Service For <small className="text-slate-400">{lan}</small>
            </h1>
          </CCardHeader>
          <CCardBody>
            <form className="container" onSubmit={formik.handleSubmit}>
              <div className="w-full flex flex-col gap-y-3">
                <label htmlFor="title">Content </label>

                <InputTextArea1 {...formik.getFieldProps("content")} />

                <Error1 error={formik.errors.content} />
              </div>
              <div className="w-full flex flex-col gap-y-3">
                <label htmlFor="file">Media</label>
                <FileInput
                  file={formik.values.media}
                  name="image"
                  onChange={(e) => {
                    if (e.target.files?.length) {
                      formik.setFieldValue("media", e.target.files[0]);
                    }
                  }}
                />
                <Error1 error={formik.errors.media} />
              </div>
              <CButton type="submit" className="md:w-[300px] w-full mb-3">
                Submit
              </CButton>
            </form>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Create;
