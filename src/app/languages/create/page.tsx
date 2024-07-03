"use client";
import { ChangeEvent, FunctionComponent } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CRow,
} from "@coreui/react-pro";
import FileInput from "@/app/lib/components/form/InputFile1";
import TextInput from "@/app/lib/components/form/InputText1";
import { useLanguagesInjection } from "../languages.module";

import {
  FormInitalValuesFactory,
  FormSchemaValidatorFactory,
} from "@/app/lib/services";

interface CreateLanguageProps {}

// Define the initial form values

const inputClasses = "border border-gray-300 rounded-md px-3 py-2";
const CreateLanguage: FunctionComponent<CreateLanguageProps> = () => {
  const { languagesController, languagesService } = useLanguagesInjection();
  return (
    <Formik
      initialValues={FormInitalValuesFactory.createInitalValues1()}
      validationSchema={FormSchemaValidatorFactory.createSchema1()}
      onSubmit={languagesController.handleCreateLanguage}
    >
      {(formikProps) => {
        return (
          <CRow className="container">
            <CCol xs={12}>
              <CCard className="mb-4">
                <CCardHeader>
                  <h1 className="py-3 text-gray-700">Create Languages</h1>
                </CCardHeader>
                <CCardBody>
                  <Form className="w-full container flex flex-col gap-y-5 justify-center items-center">
                    <div className="w-full flex flex-col gap-y-3">
                      <label htmlFor="title">Title </label>
                      <Field
                        type="text"
                        id="title"
                        name="title"
                        placeholder="title"
                        as={TextInput}
                      />

                      <ErrorMessage
                        className="text-xs font-semibold text-rose-700 py-2"
                        name="title"
                        component="div"
                      />
                    </div>

                    <div className="w-full flex flex-col gap-y-3">
                      <label htmlFor="file">File</label>
                      <FileInput
                        file={formikProps.values.file}
                        name="file"
                        onChange={(e) => {
                          if (e.target.files?.length) {
                            formikProps.setFieldValue(
                              "file",
                              e.target.files[0]
                            );
                          }
                        }}
                      />

                      <ErrorMessage
                        className="text-xs font-semibold text-rose-700 py-2"
                        name="file"
                        component="div"
                      />
                    </div>

                    <CButton type="submit" className="md:w-[300px] w-full mb-3">
                      Submit
                    </CButton>
                  </Form>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        );
      }}
    </Formik>
  );
};

export default CreateLanguage;
