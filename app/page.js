import React from "react";
import RoketIcon from "@/public/roket.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src={RoketIcon} />
      <h1>Welcome, Movieing Box!!</h1>
    </>
  );
}
