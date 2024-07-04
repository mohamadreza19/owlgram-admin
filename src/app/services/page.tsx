'use client';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react-pro';
import { FunctionComponent, useEffect, useState } from 'react';
import { useLanguagesInjection } from '../languages/languages.module';
import { Language } from '../languages/interfaces';
import { useServicesInjection } from './services.module';
import SmartTableBasicExample from '../lib/components/table/SmartTableBasixExample';
import Image from 'next/image';
import Link from 'next/link';
import Select1 from '../lib/components/select/Select1';

interface ServicesProps {}

const Services: FunctionComponent<ServicesProps> = () => {
  const { languagesService } = useLanguagesInjection();
  const { servicesService, servicesController } = useServicesInjection();
  const languages = languagesService.getLanguages(true);
  const services = servicesService.getServices(true);
  const [language, setLanguage] = useState<Language>();
  function handleSetSelectedOption(language: Language) {
    setLanguage(language);
  }
  useEffect(() => {
    if (language) {
      servicesController.handleFetchServiceBasedLanguageId(language.id);
    }
  }, [language, language?.id]);
  return (
    <CRow className="container">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="flex flex-col justify-center">
            <h1 className="py-3 text-gray-700">Services</h1>

            <div className=" flex gap-x-3">
              <Link
                href={`/services/create-service/${language?.id}?lan=${language?.title}`}
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
                services
                // languages
              }
              _scopedColumns={{
                media: (item: any) => {
                  return (
                    <section className="!border !border-gray-200 !border-solid w-72 h-64 rounded-md my-3">
                      <Image
                        fill
                        src={item.media}
                        alt={'media'}
                        className="!static "
                      />
                    </section>
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

export default Services;
