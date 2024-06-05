"use client";
import { InputArrayFile1, InputTextArea1 } from "@/app/lib/components/form";
import FileInput from "@/app/lib/components/form/InputFile1";
import TextInput from "@/app/lib/components/form/InputText1";
import { CButton } from "@coreui/react-pro";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useParams } from "next/navigation";
import { FunctionComponent } from "react";
import * as Yup from "yup";

import {
  FormInitalValuesFactory,
  FormSchemaValidatorFactory,
} from "@/app/lib/services";
import { useLanguagesInjection } from "@/app/languages/languages.module";

interface CreateContentProps {}

const CreateContent: FunctionComponent<CreateContentProps> = () => {
  const { languageIdToCreateContent } = useParams<{
    languageIdToCreateContent: string;
  }>();

  const { languagesController } = useLanguagesInjection();
  return (
    <Formik
      initialValues={FormInitalValuesFactory.createInitalValues2(
        languageIdToCreateContent
      )}
      enableReinitialize
      validationSchema={FormSchemaValidatorFactory.createSchema2()}
      onSubmit={languagesController.handleCreateAboutOwlgramBasedLanguageId}
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
                name="content"
                component="div"
              />
            </div>

            <div className="w-full flex flex-col gap-y-3 mt-4">
              <label htmlFor="file">File</label>
              <InputArrayFile1
                // file={formikProps.values.media}
                name="media"
                onChange={(e) => {
                  if (e.target.files?.length) {
                    if (e.target.files.length) {
                      const newMedia = [
                        ...formikProps.values.media,
                        e.target.files[0],
                      ];
                      formikProps.setFieldValue("media", newMedia);
                    }
                  }
                }}
                onClickCloseAndGetFileIndex={(fileindex) => {
                  console.log(fileindex);
                  const filterdMedia = formikProps.values.media.filter(
                    (_, i) => i !== fileindex
                  );
                  formikProps.setFieldValue("media", filterdMedia);
                }}
                files={formikProps.values.media}
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

export default CreateContent;
