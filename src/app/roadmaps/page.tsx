'use client';
import { FunctionComponent, useEffect } from 'react';
import { useRoadmapsInjection } from './roadmaps.module';
import { Card1, Card2 } from '../lib/components/card';

interface RoadmapsProps {}

const Roadmaps: FunctionComponent<RoadmapsProps> = () => {
  const module = useRoadmapsInjection();
  const roadmaps = module.roadmapsService.getRoadmaps(true);
  console.log(roadmaps);
  useEffect(() => {
    module.roadmapsController.handleFetchRoadmaps();
  }, []);
  return (
    <div className="container grid gap-3  md:grid-cols-3  grid-cols-12">
      {roadmaps.map((roadmap, index) => (
        <Card2 title="Road Map" src={roadmap.map} key={index} />
      ))}
    </div>
  );
};

export default Roadmaps;
