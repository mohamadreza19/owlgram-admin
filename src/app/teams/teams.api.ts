import ApiService from '../lib/services/api/ApiService';
import { TeamsResponse, addTOTeamBody } from './interfaces';

class TeamsApiService extends ApiService {
  async getTeams(id: string): Promise<TeamsResponse> {
    const result = await this.$axios.get('/getTeam?language_id=' + id);

    return result.data;
  }
  async addTOTeam(body: addTOTeamBody) {
    const result = await this.$axios.post(
      '/addTOTeam',
      this.jsonToFormData(body)
    );

    return result.data;
  }
}

export default TeamsApiService;
