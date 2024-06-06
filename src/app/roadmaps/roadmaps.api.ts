import ApiService from '../lib/services/api/ApiService';
import { CreateRoadmap, RoadmapsResponse } from './interfaces';

class RoadmapsApiService extends ApiService {
  async getRoadmaps(): Promise<RoadmapsResponse> {
    const result = await this.$axios.get('/getRoadmap');

    return result.data;
  }
  async postRoadmaps(body: CreateRoadmap): Promise<RoadmapsResponse> {
    const result = await this.$axios.post(
      '/roadmap',
      this.jsonToFormData(body)
    );

    return result.data;
  }
}

export default RoadmapsApiService;
