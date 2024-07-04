'use client';
import { FunctionComponent } from 'react';
import { useQuestionAnswerInjection } from '../../questionAnswer.module';
import { useParams, useSearchParams } from 'next/navigation';
import { useFormik } from 'formik';
import {
  FormInitalValuesFactory,
  FormSchemaValidatorFactory,
} from '@/app/lib/services';
import TextArea1 from '@/app/lib/components/form/InputTextArea1';
import { Error1 } from '@/app/lib/components/form';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react-pro';

interface CreateProps {}

const Create: FunctionComponent<CreateProps> = () => {
  const { questionAnswerController } = useQuestionAnswerInjection();
  const { id } = useParams<{
    id: string;
  }>();
  const searchParams = useSearchParams();
  const lan = searchParams.get('lan');

  const formik = useFormik({
    initialValues: FormInitalValuesFactory.createInitalValues9(id),
    validationSchema: FormSchemaValidatorFactory.createSchema9(),
    enableReinitialize: true,
    onSubmit: questionAnswerController.handleCreateQuestionAnswers,
  });
  return (
    <CRow className="container">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h1 className="py-3 text-gray-700">
              Create Question And Answer For{' '}
              <small className="text-slate-400">{lan}</small>
            </h1>
          </CCardHeader>
          <CCardBody>
            <form onSubmit={formik.handleSubmit} className="container">
              <div className="w-full flex flex-col gap-y-3 mb-3">
                <label htmlFor="title">Question </label>
                <TextArea1 {...formik.getFieldProps('question')} />
                <Error1 error={formik.errors.question} />
              </div>
              <div className="w-full flex flex-col gap-y-3 mb-3">
                <label htmlFor="title">Answer </label>
                <TextArea1 {...formik.getFieldProps('answer')} />
                <Error1 error={formik.errors.answer} />
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
