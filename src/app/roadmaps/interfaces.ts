import RoadmapsService from './roadmaps.service';
import RoadmapsController from './roadmaps.controller';

export type Roadmap = {
  map: string;
};
export type RoadmapsResponse = Roadmap[];

export interface RoadmapsInjectionEntities {
  roadmapsService: RoadmapsService;
  roadmapsController: RoadmapsController;
}

export interface CreateRoadmap {
  map: string;
}
