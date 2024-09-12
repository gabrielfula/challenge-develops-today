import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';


@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get('/')
  async list(): Promise<object> {
    return await this.countryService.listAll();
  }
}
