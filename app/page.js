import React from "react";
import { Box, Content } from "@/styles/styles";
import RoketIcon from "@/public/roket.svg";
import Image from "next/image";

export default function Home() {
  return (
    <Box>
      <Content>
        <Image src={RoketIcon} />
        <h1>Welcome, Movieing Box!!</h1>
      </Content>
    </Box>
  );
}
