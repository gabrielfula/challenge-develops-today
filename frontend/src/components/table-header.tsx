import {
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


interface ITableHeaders {
  headers: string[]
}

export default function TableHeaders({ headers }: ITableHeaders) {
  return (
    <TableHeader>
      <TableRow>
        {headers.map((item, index) => (
          <TableHead key={index}>{item}</TableHead>
        ))}
          <TableHead>Details</TableHead>
      </TableRow>
    </TableHeader>  
  )
}
