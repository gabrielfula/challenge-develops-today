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

  static async details(code: string) {
    try {
      const response = await instance({
        url: `/countries/${code}`
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async flag(code: string) {
    try {
      const response = await instance({
        url: `/countries/flag/${code}`
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async population(countryName: string) {
    try {
      const response = await instance({
        url: `/countries/population/?country=${countryName}`
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}