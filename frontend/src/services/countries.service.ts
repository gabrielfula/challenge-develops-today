import { instance } from "./axios";

export class CountryService {

  static async listAll() {
    try {
      const response = await instance({
        url: "/countries"
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
  }


  
}