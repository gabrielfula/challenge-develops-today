import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';


@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}


  @Get('/')
  async list(): Promise<object> {
    return await this.countryService.listAll();
  };

  @Get('population')
  async populationDetails(): Promise<any> {
    return await this.countryService.population();
  };

  @Get('flag')
  async flag(): Promise<any> {
    return await this.countryService.flagImage();
  };

  @Get('/:iso')
  async details(@Param() params: any): Promise<object> {
    return await this.countryService.detailsByIso(params.iso);
  };
}
