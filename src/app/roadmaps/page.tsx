'use client';
import { FunctionComponent, useEffect } from 'react';
import { useRoadmapsInjection } from './roadmaps.module';
import { Card1, Card2 } from '../lib/components/card';
import NotContentFound from '../lib/components/NotContentFound';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react-pro';
import Link from 'next/link';

interface RoadmapsProps {}

const Roadmaps: FunctionComponent<RoadmapsProps> = () => {
  const { roadmapsService, roadmapsController } = useRoadmapsInjection();
  const roadmaps = roadmapsService.getRoadmaps(true);

  useEffect(() => {
    roadmapsController.handleFetchRoadmaps();
  }, []);
  if (!roadmaps.length) return <NotContentFound />;
  return (
    <>
      <CRow className="container">
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader className="flex flex-col justify-center">
              <h1 className="py-3 text-gray-700">Road Maps</h1>

              <div className=" flex gap-x-3">
                <Link href={'/roadmaps/'}>
                  <CButton variant="outline" color={'secondary'}>
                    Add
                  </CButton>
                </Link>
              </div>
            </CCardHeader>
            <CCardBody>
              <div className="container grid gap-3  md:grid-cols-3  grid-cols-12">
                {roadmaps.map((roadmap, index) => (
                  <Card2 title="Road Map" src={roadmap.map} key={index} />
                ))}
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Roadmaps;
