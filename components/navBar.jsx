"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";

const navBar = () => {
  return (
    <NavBarContainer>
      <ul>
        <li>
          <Link href={"/daily"}>Daily</Link>
        </li>
        <li>
          <Link href={"/weekly"}>Weekly</Link>
        </li>
        <li>
          <Link href={"/search"}>Search</Link>
        </li>
      </ul>
    </NavBarContainer>
  );
};

export default navBar;

const NavBarContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  li {
    margin-bottom: 20px;
  }
`;
