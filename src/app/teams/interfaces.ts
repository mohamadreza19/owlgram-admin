import TeamsService from './teams.service';
import TeamsController from './teams.controller';

export type Team = {
  name: string;
  image: string;
  side: string;
};
export type TeamsResponse = Team[];

export interface addTOTeamBody extends Team {
  language_id: string;
}

export interface TeamsInjectionEntities {
  teamsService: TeamsService;
  teamsController: TeamsController;
}
