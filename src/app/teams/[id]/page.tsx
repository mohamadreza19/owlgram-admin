'use client';
import {
  CBadge,
  CButton,
  CCardBody,
  CCol,
  CCollapse,
  CRow,
  CSmartTable,
} from '@coreui/react-pro';
import { FunctionComponent, useEffect, useState } from 'react';
import type { Item } from '@coreui/react-pro/dist/components/smart-table/CSmartTableInterface';
import { useTeamsInjection } from '../teams.module';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
interface GetTeamByIdProps {}
const usersData = [
  {
    name: 'kjhkjh',
    image: '',
    side: 'jhkjhk',
  },
  {
    name: 'hgghg',
    image: 'https://owlegram.com:2053/public/team/1716893050616.jpg',
    side: 'df',
  },
  {
    name: 'dsdfs',
    image: 'https://owlegram.com:2053/public/ ',
    side: 'ssdd',
  },
  {
    name: 'jessy',
    image: 'https://owlegram.com:2053/public/team/1717575008314.webp',
    side: 'user',
  },
];

const GetTeamById: FunctionComponent<GetTeamByIdProps> = () => {
  const { id } = useParams<{ id: string }>();
  const module = useTeamsInjection();
  const teams = module.teamsService.getTeams(true);
  const router = useRouter();

  useEffect(() => {
    if (!Number(id)) return router.back();

    if (id) {
      module.teamsController.handleSetTeamByLanguageId(id);
    }
  }, [id]);

  return (
    <div className="container">
      <CRow>
        <CCol xs={12}>
          <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
            <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
              <tr>
                <th scope="col" className="px-6 py-4">
                  avatar
                </th>
                <th scope="col" className="px-6 py-4">
                  name
                </th>
                <th scope="col" className="px-6 py-4">
                  side
                </th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr
                  key={index}
                  className="border-b border-neutral-200 dark:border-white/10"
                >
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <Image
                      className="rounded-full min-w-[70px] min-h-[70px] max-w-[70px] max-h-[70px]"
                      unoptimized
                      width={70}
                      height={70}
                      src={team.image}
                      alt=""
                    />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{team.name}</td>
                  <td className="whitespace-nowrap px-6 py-4">{team.side}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CCol>
      </CRow>
    </div>
  );
};

export default GetTeamById;
