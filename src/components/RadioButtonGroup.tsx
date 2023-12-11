import React from "react";
import styled from "styled-components";

const RadioGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const CustomRadio = styled.input.attrs({ type: "radio" })`
  display: none;
`;

const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const RadioCustom = styled.span`
  display: inline-block;
  border: 2px solid #737373;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  position: relative;

  ${CustomRadio}:checked + &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 15px;
    height: 15px;
    transform: translate(-50%, -50%);
    background-color: #19075d;
    border-radius: 50%;
  }

  ${CustomRadio}:checked + & {
    border-color: #19075d;
  }
`;

type RadioButtonGroupProps = {
  options: Array<string>;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButtonGroup = ({ options, name, onChange }: RadioButtonGroupProps) => {
  return (
    <RadioGroup>
      {options.map((option, index) => (
        <RadioLabel key={index}>
          <CustomRadio name={name} value={option} id={`option-${index}`} onChange={onChange} />
          <RadioCustom />
          {option}
        </RadioLabel>
      ))}
    </RadioGroup>
  );
};
