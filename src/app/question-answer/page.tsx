'use client';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react-pro';
import Link from 'next/link';
import { FunctionComponent, useEffect, useState } from 'react';
import Select1 from '../lib/components/select/Select1';
import { useLanguagesInjection } from '../languages/languages.module';
import { useQuestionAnswerInjection } from './questionAnswer.module';
import { Language } from '../languages/interfaces';
import SmartTableBasicExample from '../lib/components/table/SmartTableBasixExample';
import Image from 'next/image';

interface AuestionAnswerProps {}

const AuestionAnswer: FunctionComponent<AuestionAnswerProps> = () => {
  const { languagesService } = useLanguagesInjection();
  const { questionAnswerService, questionAnswerController } =
    useQuestionAnswerInjection();
  const languages = languagesService.getLanguages(true);
  const questionAnswer = questionAnswerService.getQuestionAnswer(true);
  const [language, setLanguage] = useState<Language>();
  function handleSetSelectedOption(language: Language) {
    setLanguage(language);
  }
  useEffect(() => {
    if (language) {
      questionAnswerController.handleFetchQuestionAnswersBasedLanguageId(
        language.id
      );
    }
  }, [language, language?.id]);
  return (
    <CRow className="container">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="flex flex-col justify-center">
            <h1 className="py-3 text-gray-700">Question And Answer</h1>

            <div className=" flex gap-x-3">
              <Link
                href={`/question-answer/create/${language?.id}?lan=${language?.title}`}
              >
                <CButton variant="outline" color={'secondary'}>
                  Add
                </CButton>
              </Link>
              <Select1
                languages={languages}
                handleSelectOption={handleSetSelectedOption}
              />
            </div>
          </CCardHeader>
          <CCardBody>
            <SmartTableBasicExample
              _columns={[
                {
                  key: 'question',
                },
                {
                  key: 'answer',
                  filter: false,
                  sorter: false,
                },
              ]}
              _data={
                questionAnswer
                // languages
              }
              _scopedColumns={{}}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default AuestionAnswer;
