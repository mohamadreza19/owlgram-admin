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
import { useTeamsInjection } from './teams.module';
import { Language } from '../languages/interfaces';
import SmartTableBasicExample from '../lib/components/table/SmartTableBasixExample';
import Image from 'next/image';

interface TeamsProps {}

const Teams: FunctionComponent<TeamsProps> = () => {
  const { languagesService } = useLanguagesInjection();
  const { teamsService, teamsController } = useTeamsInjection();
  const languages = languagesService.getLanguages(true);
  const teams = teamsService.getTeams(true);
  const [language, setLanguage] = useState<Language>();
  function handleSetSelectedOption(language: Language) {
    setLanguage(language);
  }
  useEffect(() => {
    if (language) {
      teamsController.handleSetTeamByLanguageId(language.id);
    }
  }, [language, language?.id]);
  return (
    <CRow className="container">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="flex flex-col justify-center">
            <h1 className="py-3 text-gray-700">Teams</h1>

            <div className=" flex gap-x-3">
              <Link
                href={`/teams/create/'${language?.id}?lan=${language?.title}`}
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
                  key: 'name',
                  filter: false,
                },
                {
                  key: 'side',
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
                teams
                // languages
              }
              _scopedColumns={{
                image: (item: any) => {
                  return (
                    <section className="!border !border-gray-200 !border-solid w-72 h-64 rounded-md my-3">
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

export default Teams;
