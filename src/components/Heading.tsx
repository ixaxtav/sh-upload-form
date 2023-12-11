import React from "react";
import styled from "styled-components";

type HeadingProps = {
  children: React.ReactNode;
};

const CustomHeading = styled.h1<HeadingProps>`
  margin: 0;
  font-weight: 700;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #cdccdd;
  text-decoration-thickness: 1px;
  padding-bottom: 50px;
  text-underline-offset: 20px;

  @media (max-width: 375px) {
    text-decoration: none; // Removes the underline
  }
`;

export const Heading = ({ children }: HeadingProps) => {
  return <CustomHeading>{children}</CustomHeading>;
};
