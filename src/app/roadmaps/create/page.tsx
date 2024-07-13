"use client";
export const dynamic = "force-static";
import { Error1 } from "@/app/lib/components/form";
import FileInput from "@/app/lib/components/form/InputFile1";
import {
  FormInitalValuesFactory,
  FormSchemaValidatorFactory,
} from "@/app/lib/services";
import { CButton } from "@coreui/react-pro";
import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { useRoadmapsInjection } from "../roadmaps.module";

interface CreateRoadmapProps {}

const CreateRoadmap: FunctionComponent<CreateRoadmapProps> = () => {
  const { roadmapsController, roadmapsService } = useRoadmapsInjection();
  const formik = useFormik({
    initialValues: FormInitalValuesFactory.createInitalValues5(),
    validationSchema: FormSchemaValidatorFactory.createSchema5(),

    onSubmit: (values) => {
      roadmapsController.handleCreateRoadmap(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="container">
      <div className="w-full flex flex-col gap-y-3">
        <label htmlFor="file">Map</label>
        <FileInput
          file={formik.values.map}
          name="map"
          onChange={(e) => {
            if (e.target.files?.length) {
              formik.setFieldValue("map", e.target.files[0]);
            }
          }}
        />
        <Error1 error={formik.errors.map} />
      </div>
      <CButton type="submit" className="md:w-[300px] w-full mb-3">
        Submit
      </CButton>
    </form>
  );
};

export default CreateRoadmap;
