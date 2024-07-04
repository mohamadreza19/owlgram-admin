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
import SmartTableBasicExample from '../lib/components/table/SmartTableBasixExample';
import Link from 'next/link';
import Select1 from '../lib/components/select/Select1';
import { useLanguagesInjection } from '../languages/languages.module';
import { useDownloadsInjection } from './downloads.module';
import { Language } from '../languages/interfaces';
import Image from 'next/image';

interface DownloadsProps {}

const Downloads: FunctionComponent<DownloadsProps> = () => {
  const { languagesService } = useLanguagesInjection();
  const { downloadsService, downloadsController } = useDownloadsInjection();
  const languages = languagesService.getLanguages(true);
  const downloads = downloadsService.getDownloads(true);
  const [language, setLanguage] = useState<Language>();
  function handleSetSelectedOption(language: Language) {
    setLanguage(language);
  }
  useEffect(() => {
    if (language) {
      downloadsController.handleFetchDownloadsByLanguageId(language.id);
    }
  }, [language, language?.id]);
  return (
    <CRow className="container">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="flex flex-col justify-center">
            <h1 className="py-3 text-gray-700">Downloads</h1>

            <div className=" flex gap-x-3">
              <Link
                href={`/downloads/create/${language?.id}?lan=${language?.title}`}
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
                  key: 'product',
                },
                {
                  key: 'os_name',
                },
                {
                  key: 'link',
                  filter: false,
                  sorter: false,
                },
                {
                  key: 'image',
                  filter: false,
                  sorter: false,
                },
              ]}
              _data={
                downloads
                // languages
              }
              _scopedColumns={{
                image: (item: any) => {
                  return (
                    <section className="!border !border-gray-200 !border-solid w-64 h-60 rounded-md my-3">
                      <Image
                        fill
                        src={item.image}
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

export default Downloads;
