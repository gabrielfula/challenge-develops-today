import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CountryService {
  constructor(private readonly httpService: HttpService) {}

  async listAll(): Promise<object> {

    const countries = await firstValueFrom(
      this.httpService.get(`${process.env.DATE_NAGGER_API}/AvailableCountries`)
    );

    return countries.data;
  };

  async detailsByIso(iso: string): Promise<object> {

    const country = await firstValueFrom(
      this.httpService.get(`${process.env.DATE_NAGGER_API}/CountryInfo/${iso}`)
    );

    return country.data;
  };

  async population(countryName: string): Promise<object> {

    const countries = await firstValueFrom(
      this.httpService.get(`${process.env.COUNTRY_NOW_API}/population`)
    );

    const flagFiltered = await (countries.data.data).filter((item: any) => item.country === countryName);

    return flagFiltered;
  };

  async flagImage(iso: string): Promise<object> {

    const flag = await firstValueFrom(
      this.httpService.get(`${process.env.COUNTRY_NOW_API}/flag/images`)
    );

    const flagFiltered = await (flag.data.data).filter((item: any) => item.iso2 === iso);

    return flagFiltered;
  };
}
