import Link from "next/link";
import SearchMovie from "@/components/searchMovie";

export default function Home() {
  return (
    <>
      <Link href={"/daily"}>Daily</Link>
      <Link href={"/weekly"}>Weekly</Link>

      <SearchMovie />
    </>
  );
}
