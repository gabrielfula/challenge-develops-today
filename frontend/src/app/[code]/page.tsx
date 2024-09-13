import CountryBorderData from "@/components/country-border";
import CountryChart from "@/components/country-chart";
import { CountryService } from "@/services/countries.service";
import Image from "next/image";
import Link from "next/link";

export default async function DetailsCountry({ params }: { params: { code: string } }) {

  const country = await CountryService.details(params.code);

  const flag = await CountryService.flag((params.code).toUpperCase());

  const populationByCode = await CountryService.population(country.commonName);

  return (
    <>
      <div className="flex justify-end mb-5">
        <Link href={'/'} className="border-solid cursor-pointer bg-zinc-100 px-10 rounded-sm py-2 hover:bg-black hover:text-zinc-100 transition-all">Return</Link>
      </div>
      <div className="bg-zinc-100 w-full rounded-md p-16">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <p className="font-bold">Name:</p>
            <p>{country.commonName}</p>
          </div>
          <div className="flex gap-5 items-start">
            <p className="font-bold">Flag:</p>
            <Image
              src={flag[0].flag} 
              alt={`Flag from ${flag[0].iso2}`}
              width={300}
              height={300}
            />
          </div>
        </div>
        <div>
          <p className="font-bold">Country Borders:</p>
          {
            country.borders && country.borders.length > 0 ? (
              country.borders.map((item: any, index: number) => (
                <CountryBorderData 
                  key={index}
                  name={item.commonName}
                  code={item.countryCode}
                  region={item.region}
                />
              ))
            ) : (
              <p>No border countries found.</p>
            )
          }
        </div>
        <div>
          <CountryChart data={populationByCode[0].populationCounts} />
        </div>
      </div>
    </>
  );
}
