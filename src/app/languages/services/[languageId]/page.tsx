"use client";
import { ChangeEvent, FunctionComponent } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CButton, CFormInput } from "@coreui/react-pro";
import FileInput from "@/app/lib/components/form/InputFile1";
import TextInput from "@/app/lib/components/form/InputText1";

import { useLanguagesInjection } from "../../languages.module";
import {
  FormInitalValuesFactory,
  FormSchemaValidatorFactory,
} from "@/app/lib/services";
import { useParams } from "next/navigation";
import { InputArrayFile1, InputTextArea1 } from "@/app/lib/components/form";

interface CreateLanguageProps {}

const validationSchema = Yup.object({
  content: Yup.string().required("Required"),
  file: Yup.string().required("Required"),
});

// Define the initial form values

const initialValues = {
  content: "",
  file: null,
};
const inputClasses = "border border-gray-300 rounded-md px-3 py-2";
const CreateLanguage: FunctionComponent<CreateLanguageProps> = () => {
  const { languageId } = useParams<{
    languageId: string;
  }>();
  const { languagesController } = useLanguagesInjection();
  return (
    <Formik
      initialValues={FormInitalValuesFactory.createInitalValues3(languageId)}
      validationSchema={FormSchemaValidatorFactory.createSchema3()}
      onSubmit={languagesController.handleCreateServiceBasedLanguageId}
    >
      {(formikProps) => {
        return (
          <Form className="w-full container flex flex-col gap-y-5 justify-center items-center">
            <div className="w-full flex flex-col gap-y-3">
              <label htmlFor="title">Content </label>
              <Field
                type="text"
                id="content"
                name="content"
                placeholder="content"
                as={InputTextArea1}
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
                file={formikProps.values.media}
                name="_"
                onChange={(e) => {
                  if (e.target.files?.length) {
                    formikProps.setFieldValue("media", e.target.files[0]);
                  }
                }}
              />

              <ErrorMessage
                className="text-xs font-semibold text-rose-700 py-2"
                name="media"
                component="div"
              />
            </div>

            <CButton type="submit" className="md:w-[300px] w-full mb-3">
              Submit
            </CButton>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateLanguage;
