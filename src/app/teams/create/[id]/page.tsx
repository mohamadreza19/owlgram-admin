"use client";
import { Error1, InputTextArea1 } from "@/app/lib/components/form";
import FileInput from "@/app/lib/components/form/InputFile1";
import TextInput from "@/app/lib/components/form/InputText1";
import {
  FormInitalValuesFactory,
  FormSchemaValidatorFactory,
} from "@/app/lib/services";
import { CButton } from "@coreui/react-pro";
import { useFormik } from "formik";
import { useParams, useRouter } from "next/navigation";
import { FunctionComponent, useEffect } from "react";
import { useTeamsInjection } from "../../teams.module";

interface CreateTeamProps {}

const CreateTeam: FunctionComponent<CreateTeamProps> = () => {
  const { teamsController, teamsService } = useTeamsInjection();
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const formik = useFormik({
    initialValues: FormInitalValuesFactory.createInitalValues4(id),
    validationSchema: FormSchemaValidatorFactory.createSchema4(),
    enableReinitialize: true,
    onSubmit: teamsController.handleCreateTeamByLanguageId,
  });

  return (
    <form
      className="container flex flex-col gap-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        formik.submitForm();
      }}
    >
      <div className="w-full flex flex-col gap-y-3">
        <label htmlFor="title">Name </label>
        <TextInput {...formik.getFieldProps("name")} />
        <Error1 error={formik.errors.name} />
      </div>

      <div className="w-full flex flex-col gap-y-3">
        <label htmlFor="title">Side </label>
        <TextInput {...formik.getFieldProps("side")} />
        <Error1 error={formik.errors.side} />
      </div>
      <div className="w-full flex flex-col gap-y-3">
        <label htmlFor="file">image</label>
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

export default CreateTeam;
