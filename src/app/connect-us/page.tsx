'use client';
import { FunctionComponent, useEffect, useState } from 'react';
import { useConnectUsInjection } from './connectUs.module';
import Card4 from '../lib/components/card/Card4';
import NotContentFound from '../lib/components/NotContentFound';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react-pro';
import SmartTableBasicExample from '../lib/components/table/SmartTableBasixExample';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguagesInjection } from '../languages/languages.module';
import { Language } from '../languages/interfaces';
import Select1 from '../lib/components/select/Select1';

interface ConnectUsProps {}

const ConnectUs: FunctionComponent<ConnectUsProps> = () => {
  const { languagesService } = useLanguagesInjection();
  const { connectUsController, connectUsService } = useConnectUsInjection();
  const languages = languagesService.getLanguages(true);
  const connectUs = connectUsService.getConnectUs(true);
  const [language, setLanguage] = useState<Language>();
  function handleSetSelectedOption(language: Language) {
    setLanguage(language);
  }
  useEffect(() => {
    if (language) {
      connectUsController.fetchConnectUs();
    }
  }, [language, language?.id]);

  useEffect(() => {
    connectUsController.fetchConnectUs();
  }, []);
  if (!connectUs.length) return <NotContentFound />;
  return (
    <CRow className="container">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="flex flex-col justify-center">
            <h1 className="py-3 text-gray-700">Connect Us</h1>

            <div className=" flex gap-x-3">
              <Link
                href={`/connect-us/create/${language?.id}?lan=${language?.title}`}
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
                  key: 'email',
                  filter: true,
                },
                {
                  key: 'department',
                  filter: true,
                },
                {
                  key: 'subject',
                  filter: true,
                },
                {
                  key: 'content',
                  filter: true,
                },
                {
                  key: 'file',
                  filter: false,
                  sorter: false,
                },
              ]}
              _data={connectUs}
              _scopedColumns={{
                file: (item: any) => (
                  <div className="!border !border-gray-200 !border-solid w-72 h-60 rounded-md my-3">
                    <Image
                      fill
                      src={item.file}
                      alt="flag"
                      className="!static "
                    />
                  </div>
                ),
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ConnectUs;
