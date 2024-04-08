"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";
import NavBar from "@/components/navBar";

const header = () => {
  return (
    <>
      <Link href={"/"}>
        <TitleStyled>Movieing Box</TitleStyled>
      </Link>
      <NavBar />
    </>
  );
};

export default header;

const TitleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: bold;
  padding: 20px;
`;
