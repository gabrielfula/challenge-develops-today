import { Controller, Get, Param, Query } from '@nestjs/common';
import { CountryService } from './country.service';


@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}


  @Get('/')
  async list(): Promise<object> {
    return await this.countryService.listAll();
  };

  @Get('population')
  async populationDetails(@Query() query: any): Promise<any> {
    return await this.countryService.population(query.country);
  };

  @Get('flag/:iso')
  async flag(@Param() params: any): Promise<any> {
    return await this.countryService.flagImage(params.iso);
  };

  @Get('/:iso')
  async details(@Param() params: any): Promise<object> {
    return await this.countryService.detailsByIso(params.iso);
  };
}
