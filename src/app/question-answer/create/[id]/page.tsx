"use client";
import { FunctionComponent } from "react";
import { useQuestionAnswerInjection } from "../../questionAnswer.module";
import { useParams } from "next/navigation";
import { useFormik } from "formik";
import {
  FormInitalValuesFactory,
  FormSchemaValidatorFactory,
} from "@/app/lib/services";
import TextArea1 from "@/app/lib/components/form/InputTextArea1";
import { Error1 } from "@/app/lib/components/form";
import { CButton } from "@coreui/react-pro";

interface CreateProps {}

const Create: FunctionComponent<CreateProps> = () => {
  const module = useQuestionAnswerInjection();
  const { id } = useParams<{
    id: string;
  }>();

  const formik = useFormik({
    initialValues: FormInitalValuesFactory.createInitalValues9(id),
    validationSchema: FormSchemaValidatorFactory.createSchema9(),
    enableReinitialize: true,
    onSubmit: module.questionAnswerController.handleCreateQuestionAnswers,
  });
  return (
    <form onSubmit={formik.handleSubmit} className="container">
      <div className="w-full flex flex-col gap-y-3 mb-3">
        <label htmlFor="title">Question </label>
        <TextArea1 {...formik.getFieldProps("question")} />
        <Error1 error={formik.errors.question} />
      </div>
      <div className="w-full flex flex-col gap-y-3 mb-3">
        <label htmlFor="title">Answer </label>
        <TextArea1 {...formik.getFieldProps("answer")} />
        <Error1 error={formik.errors.answer} />
      </div>

      <CButton type="submit" className="md:w-[300px] w-full mb-3">
        Submit
      </CButton>
    </form>
  );
};

export default Create;
