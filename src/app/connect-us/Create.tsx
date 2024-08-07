"use client";
export const dynamicParams = true;
import { useParams, useSearchParams } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import { useConnectUsInjection } from "./connectUs.module";
import { useFormik } from "formik";
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
  CFormSelect,
  CRow,
} from "@coreui/react-pro";
import { Error1, InputNum1 } from "@/app/lib/components/form";
import TextArea1 from "@/app/lib/components/form/InputTextArea1";
import TextInput from "@/app/lib/components/form/InputText1";
import FileInput from "@/app/lib/components/form/InputFile1";
import Link from "next/link";
import Select1 from "@/app/lib/components/select/Select1";
import { Language } from "@/app/languages/interfaces";
import { useLanguagesInjection } from "@/app/languages/languages.module";

interface CreateProps {}

const Create: FunctionComponent<CreateProps> = () => {
  const { connectUsController, connectUsService } = useConnectUsInjection();

  const departments = connectUsService.getDepartments(true);
  const { id } = useParams<{
    id: string;
  }>();
  const searchParams = useSearchParams();
  const lan = searchParams.get("lan");
  const formik = useFormik({
    initialValues: FormInitalValuesFactory.createInitalValues8(""),
    validationSchema: FormSchemaValidatorFactory.createSchema8(),
    onSubmit: connectUsController.handleCreateConnectUs,

    enableReinitialize: true,
  });

  useEffect(() => {
    if (id) connectUsController.handleFetchDepartmentsBasedLanguageId(id);
  }, [id]);
  return (
    <CRow className="container">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="flex flex-col justify-center">
            <h1 className="py-3 text-gray-700">
              Create Connect Us For{" "}
              <small className="text-slate-400">{lan}</small>
            </h1>
          </CCardHeader>
          <CCardBody>
            <form onSubmit={formik.handleSubmit} className="container">
              <div className="w-full flex flex-col gap-y-3 mb-3">
                <label htmlFor="title">Email </label>
                <TextInput {...formik.getFieldProps("email")} />
                <Error1 error={formik.errors.email} />
              </div>
              <div className="w-full flex flex-col gap-y-3 mb-3">
                <label htmlFor="title">Content </label>
                <TextArea1 {...formik.getFieldProps("content")} />
                <Error1 error={formik.errors.content} />
              </div>
              <div className="w-full flex flex-col gap-y-3 mb-3">
                <label htmlFor="title">Subject </label>
                <TextArea1 {...formik.getFieldProps("subject")} />
                <Error1 error={formik.errors.subject} />
              </div>
              <div className="w-full flex flex-col gap-y-3 mb-3">
                <label htmlFor="title">Department </label>
                <CFormSelect {...formik.getFieldProps("department_id")}>
                  <option>Open this select menu</option>
                  {departments.map((department, index) => {
                    return (
                      <option key={index} value={department.id}>
                        {department.title}
                      </option>
                    );
                  })}
                </CFormSelect>
                <Error1 error={formik.errors.department_id} />
              </div>
              <div className="w-full flex flex-col gap-y-3">
                <label htmlFor="file">File</label>
                <FileInput
                  file={formik.values.file}
                  name="image"
                  onChange={(e) => {
                    if (e.target.files?.length) {
                      formik.setFieldValue("file", e.target.files[0]);
                    }
                  }}
                />
                <Error1 error={formik.errors.file} />
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
