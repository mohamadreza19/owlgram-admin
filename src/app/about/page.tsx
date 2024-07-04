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
import { useLanguagesInjection } from '../languages/languages.module';
import { Language } from '../languages/interfaces';
import { useAboutInjection } from './about.module';
import SmartTableBasicExample from '../lib/components/table/SmartTableBasixExample';
import Select1 from '../lib/components/select/Select1';
import Image from 'next/image';

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  const { languagesService } = useLanguagesInjection();
  const { aboutController, aboutService } = useAboutInjection();
  const languages = languagesService.getLanguages(true);
  const aboutlist = aboutService.getAboutLanguage(true);
  const [language, setLanguage] = useState<Language>();
  function handleSetSelectedOption(language: Language) {
    setLanguage(language);
  }
  useEffect(() => {
    if (language) {
      aboutController.handleFetchAboutLanguageById(language.id);
    }
  }, [language, language?.id]);

  return (
    <CRow className="container">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="flex flex-col justify-center">
            <h1 className="py-3 text-gray-700">About</h1>

            <div className=" flex gap-x-3">
              <Link
                href={`/about/create/${language?.id}?lan=${language?.title}`}
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
                  key: 'content',
                  filter: false,
                },
                {
                  key: 'media',
                  filter: false,
                  sorter: false,
                },
              ]}
              _data={
                aboutlist
                // languages
              }
              _scopedColumns={{
                media: (item: any) => {
                  return (
                    <div>
                      {item.media.map((value: string, index: number) => (
                        <section
                          key={index}
                          className="!border !border-gray-200 !border-solid w-72 h-64 rounded-md my-3"
                        >
                          <Image
                            fill
                            src={value}
                            alt={'media'}
                            className="!static "
                          />
                        </section>
                      ))}
                    </div>
                  );
                },
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default About;
{
  /* <CRow className="container">
  <CCol xs={12}>
    <CCard className="mb-4">
      <CCardHeader className="flex flex-col justify-center"></CCardHeader>
      <CCardBody>

      </CCardBody>
    </CCard>
  </CCol>
</CRow>; */
}
