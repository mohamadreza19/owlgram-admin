"use client";
import { FunctionComponent } from "react";
import { useDownloadsInjection } from "../../downloads.module";
import { useParams } from "next/navigation";
import { useFormik } from "formik";
import {
  FormInitalValuesFactory,
  FormSchemaValidatorFactory,
} from "@/app/lib/services";
import TextInput from "@/app/lib/components/form/InputText1";
import { Error1 } from "@/app/lib/components/form";
import FileInput from "@/app/lib/components/form/InputFile1";
import { CButton } from "@coreui/react-pro";

interface CreateProps {}

const Create: FunctionComponent<CreateProps> = () => {
  const module = useDownloadsInjection();
  const { id } = useParams<{ id: string }>();

  const formik = useFormik({
    initialValues: FormInitalValuesFactory.createInitalValues7(id),
    validationSchema: FormSchemaValidatorFactory.createSchema7(),
    onSubmit: module.downloadsController.handleCreateDownloadsByLanguageId,
    enableReinitialize: true,
  });
  console.log(formik.errors);
  return (
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
  );
};

export default Create;
