"use client";
import React from "react";
import { HEADER_HEIGHT } from "@/constants/common";
import styled from "styled-components";

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <Container>{children}</Container>;
};

export default Header;

const Container = styled.header`
  height: ${HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 60px;
`;
