"use client";
import React from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Text from "@/components/Text";
import { HEADER_HEIGHT } from "@/constants/common";
import { colors } from "@/constants/style";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Link href="/">
        <Logo>
          <Text weight={700} size="24px">
            dev.
          </Text>
          <Text weight={700} size="24px" color={colors.secondary}>
            Bart
          </Text>
        </Logo>
      </Link>
      <Nav />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  height: ${HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
`;
