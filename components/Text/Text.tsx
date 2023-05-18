import type { SizeUnit } from "@/types/common";

import React, { CSSProperties } from "react";
import styled from "styled-components";

type TextSize = `${string}${SizeUnit}`;

interface TextProps {
  color?: CSSProperties["color"];
  size?: TextSize;
  variant?: "KBO";
  weight?: 300 | 500 | 700;
  children: React.ReactNode;
}

const Text = ({
  color,
  size = "1rem",
  variant = "KBO",
  weight = 300,
  children,
}: TextProps) => {
  return (
    <Container color={color} size={size} weight={weight} variant={variant}>
      {children}
    </Container>
  );
};

export default Text;

const Container = styled.span<Omit<TextProps, "children">>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  font-family: ${({ variant }) => variant};
  font-weight: ${({ weight }) => weight};
`;
