import styled, { css } from "styled-components";
import { IoChevronDown } from "react-icons/io5";

const SelectContainer = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;
`;

const CustomSelect = styled.select<{ bold: boolean }>`
  appearance: none;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px 40px 10px 10px;
  color: #19075d;
  width: 100%;
  font-size: 16px;
  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `};
  &:focus {
    outline: none;
  }
`;

const ChevronIcon = styled(IoChevronDown)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #19075d;
`;

type SelectProps = {
  placeholder?: string;
  options: { value: string; label: string }[];
  value?: string;
  bold?: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({ placeholder, value, bold = false, options, onChange }: SelectProps) => {
  return (
    <SelectContainer>
      <CustomSelect onChange={onChange} value={value} bold={bold}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </CustomSelect>
      <ChevronIcon size="20px" />
    </SelectContainer>
  );
};
