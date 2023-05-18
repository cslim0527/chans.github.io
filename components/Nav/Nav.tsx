"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import Text from "@/components/Text";
import styled from "styled-components";
import { usePathname } from "next/navigation";

const navData = [
  { href: "/info", text: "info" },
  { href: "/project", text: "project" },
];

const Nav = () => {
  const pathname = usePathname();
  const getTextColor = useCallback(
    (href: string) => {
      return href === pathname ? "gray" : "white";
    },
    [pathname]
  );

  return (
    <nav>
      <NavList>
        {navData.map(({ href, text }, index) => (
          <li key={`nav-item-${index}`}>
            <Link href={href}>
              <Text size="14px" weight={700} color={getTextColor(href)}>
                {text.toUpperCase()}
              </Text>
            </Link>
          </li>
        ))}
      </NavList>
    </nav>
  );
};

export default Nav;

const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;
