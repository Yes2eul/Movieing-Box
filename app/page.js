import Link from "next/link";
import "@/styles/globals.css";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />

      <div>
        <Link href={"/daily"}>Daily</Link>
        <Link href={"/weekly"}>Weekly</Link>
      </div>

      <div>Search Movie</div>
      <div>Movie List</div>
      <div>Movie Info</div>
    </>
  );
}
