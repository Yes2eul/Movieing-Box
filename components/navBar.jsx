"use client";

import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import MenuIcon from "@/public/menu.svg";
import LightIcon from "@/public/light.svg";
import Image from "next/image";

const navBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavBarContainer>
      <ul>
        <li>
          <Image src={MenuIcon} alt="Menu" onClick={toggleMenu} />
        </li>
        {isMenuOpen && (
          <>
            <li>
              <Link href={"/daily"}>Daily</Link>
            </li>
            <li>
              <Link href={"/weekly"}>Weekly</Link>
            </li>
            <li>
              <Link href={"/search"}>Search</Link>
            </li>
            <li>
              <Image src={LightIcon} alt="Light" />
            </li>
          </>
        )}
      </ul>
    </NavBarContainer>
  );
};

export default navBar;

const NavBarContainer = styled.div`
  width: 200px;
  height: 100vh;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    margin: 20px 0;
  }

  a:hover {
    text-decoration: underline;
  }

  .menu-icon,
  .light-icon {
    cursor: pointer;
  }
`;
