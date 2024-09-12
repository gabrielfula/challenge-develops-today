import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { HttpModule } from '@nestjs/axios';



@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
