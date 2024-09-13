import { Earth } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-zinc-100 h-screen w-44 fixed top-0 left-0">
      <div className="flex gap-4 items-center justify-center mt-20">
        <Link href={'/'}>Countries</Link>
        <Earth strokeWidth={1.25} />
      </div>
    </div>
  )
}
