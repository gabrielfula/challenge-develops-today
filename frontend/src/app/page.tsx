import CountryData from "@/components/country-data";
import TableHeaders from "@/components/table-header"
import {
  Table,
  TableBody,
  TableCaption,
  TableRow,
} from "@/components/ui/table"
import { ICountries } from "@/interfaces/country";
import { CountryService } from "@/services/countries.service"


export default async function Home() {

  const countries = await CountryService.listAll();

  return (
    <div className="bg-zinc-100 w-full rounded-md p-16">
      <Table>
        <TableCaption>A list of countries.</TableCaption>
        <TableHeaders headers={["Name", "Country code"]} />
        <TableBody>
          {countries.map((item: ICountries) => (
            <CountryData name={item.name} code={item.countryCode} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
