import React from "react";
import styled, { css } from "styled-components";

type TextProps = {
  children: React.ReactNode;
  bold?: boolean;
  color?: string;
};

const CustomText = styled.p<TextProps>`
  margin-top: 0;
  margin-bottom: 10px;
  color: ${({ color }) => color || "#19075d"};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `};
`;

export const Text = ({ children, bold = false, color }: TextProps) => {
  return (
    <CustomText bold={bold} color={color}>
      {children}
    </CustomText>
  );
};
