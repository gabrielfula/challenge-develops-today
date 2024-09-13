import CountryData from "@/components/country-data";
import TableHeaders from "@/components/table-header"
import {
  Table,
  TableBody,
  TableCaption,
} from "@/components/ui/table"
import { ICountries } from "@/interfaces/country";
import { CountryService } from "@/services/countries.service"


export default async function Home() {

  const countries = await CountryService.listAll();

  return (
    <>
      <h1 className="font-bold text-lg">A list of all countries</h1>
      <div className="bg-zinc-100 w-full rounded-md p-16">
        <Table>
          <TableCaption>A list of countries.</TableCaption>
          <TableHeaders headers={["Name", "Country code"]} />
          <TableBody>
            {countries.map((item: ICountries, index: number) => (
              <CountryData key={index} name={item.name} code={item.countryCode} />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
