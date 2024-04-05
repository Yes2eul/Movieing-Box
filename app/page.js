import Link from "next/link";
import "@/styles/globals.css";
import Header from "@/components/header";
import SearchMovie from "@/components/searchMovie";

export default function Home() {
  return (
    <>
      <Header />

      <Link href={"/daily"}>Daily</Link>
      <Link href={"/weekly"}>Weekly</Link>

      <SearchMovie />
    </>
  );
}
