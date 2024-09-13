import Link from "next/link";

interface ICountryBorderData {
  name: string;
  code: string;
  region: string;
}

export default function CountryBorderData({ name, code, region }: ICountryBorderData) {
  return (
    <div className="bg-red-90 flex gap-10 m-3">
      <div className="flex gap-2">
        <p className="font-bold">Name:</p>
        <Link href={`/${code}`}>{name}</Link>
      </div>
      <div className="flex gap-2">
        <p className="font-bold">ISO:</p>
        <p>{code}</p>
      </div>
      <div className="flex gap-2">
        <p className="font-bold">Region:</p>
        <p>{region}</p>
      </div>
    </div>
  )
}
