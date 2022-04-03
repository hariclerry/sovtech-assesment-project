import { RESTDataSource } from "apollo-datasource-rest";

export class SwapiApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api";
  }

  async getAllPeople() {
    const response = await this.get(`${this.baseURL}/people`);
    return response.results || [];
  }

  async getPerson(name: String) {
    const response = await this.get(`${this.baseURL}/people/?search=${name}`);
    return response.results;
  }

  async getPaginatePeople(paramsURL: any) {
    const response = await this.get(
      `${this.baseURL}/people/?page=${paramsURL}`
    );
    return response;
  }
}
