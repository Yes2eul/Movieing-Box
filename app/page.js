import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/daily"}>Daily</Link>
      <Link href={"/weekly"}>Weekly</Link>
      <Link href={"/search"}>Search</Link>
    </>
  );
}
