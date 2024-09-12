import { Module } from '@nestjs/common';
import { CountryModule } from './modules/countries/country.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    CountryModule,
    ConfigModule.forRoot()
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
