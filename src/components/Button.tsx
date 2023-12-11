import React from "react";
import styled, { css } from "styled-components";

const CustomButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || ""};
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  font-weight: 700;

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: #19075d;
      color: #fff;
      border: none;
    `}

  ${({ variant }) =>
    variant === "outline" &&
    css`
      background-color: transparent;
      color: #e5a600;
      border: 2px solid #e5a600;
    `}

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    ${({ variant }) =>
      variant === "primary"
        ? css`
            outline: 2px solid #19075d;
          `
        : variant === "outline"
        ? css`
            outline: 2px solid #e5a600;
          `
        : css`
            outline: 2px solid #19075d;
          `}
    outline-offset: 2px;
  }
`;

type ButtonProps = {
  variant?: "primary" | "outline";
  children: React.ReactNode;
  width?: string;
  onClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant = "primary", width, onClick, children }: ButtonProps) => {
  return (
    <CustomButton variant={variant} onClick={onClick} width={width}>
      {children}
    </CustomButton>
  );
};
