"use client";
import { FunctionComponent } from "react";
import { useDownloadsInjection } from "./downloads.module";
import { useParams, useSearchParams } from "next/navigation";
import { useFormik } from "formik";
import {
  FormInitalValuesFactory,
  FormSchemaValidatorFactory,
} from "@/app/lib/services";
import TextInput from "@/app/lib/components/form/InputText1";
import { Error1 } from "@/app/lib/components/form";
import FileInput from "@/app/lib/components/form/InputFile1";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react-pro";
import { GetStaticPaths } from "next";
import { StaticParams } from "@/app/lib/shared/interfaces";

interface CreateProps {}

const Create: FunctionComponent<CreateProps> = () => {
  const { downloadsController, downloadsService } = useDownloadsInjection();
  const { id } = useParams<{ id: string }>();

  const searchParams = useSearchParams();
  const lan = searchParams.get("lan");

  const formik = useFormik({
    initialValues: FormInitalValuesFactory.createInitalValues7(id),
    validationSchema: FormSchemaValidatorFactory.createSchema7(),
    onSubmit: downloadsController.handleCreateDownloadsByLanguageId,
    enableReinitialize: true,
  });

  return (
    <CRow className="container">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h1 className="py-3 text-gray-700">
              Create Download For{" "}
              <small className="text-slate-400">{lan}</small>
            </h1>
          </CCardHeader>
          <CCardBody>
            <form className="container" onSubmit={formik.handleSubmit}>
              <div className="w-full flex flex-col gap-y-3">
                <label htmlFor="title">Product </label>
                <TextInput {...formik.getFieldProps("product")} />
                <Error1 error={formik.errors.product} />
              </div>
              <div className="w-full flex flex-col gap-y-3">
                <label htmlFor="title">Os Name </label>
                <TextInput {...formik.getFieldProps("os_name")} />
                <Error1 error={formik.errors.os_name} />
              </div>
              <div className="w-full flex flex-col gap-y-3">
                <label htmlFor="title">Link </label>
                <TextInput {...formik.getFieldProps("link")} />
                <Error1 error={formik.errors.link} />
              </div>
              <div className="w-full flex flex-col gap-y-3">
                <label htmlFor="file">Image</label>
                <FileInput
                  file={formik.values.image}
                  name="image"
                  onChange={(e) => {
                    if (e.target.files?.length) {
                      formik.setFieldValue("image", e.target.files[0]);
                    }
                  }}
                />
                <Error1 error={formik.errors.image} />
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
