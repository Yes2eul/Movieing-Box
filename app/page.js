import Link from "next/link";
import "@/styles/globals.css";

export default function Home() {
  return (
    <>
      <header>Movieing Box</header>

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
