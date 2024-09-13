import { Eye } from "lucide-react";
import { TableCell, TableRow } from "./ui/table";
import Link from "next/link";


export interface ICountryData {
  name: string;
  code: string;
}

export default function CountryData({ name, code }: ICountryData) {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{code}</TableCell>
      <TableCell>
        <Link href={`/${code}`}>
          <Eye strokeWidth={1.25} />
        </Link>
      </TableCell>
    </TableRow>
  )
}
