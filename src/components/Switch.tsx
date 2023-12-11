import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span<{ checked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.checked ? "#19075d" : "#e9e9e9")};
  transition: 0.4s;
  border-radius: 30px;

  &:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: ${(props) => (props.checked ? "33px" : "4px")};
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Switch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked(!checked);

  return (
    <Container>
      <SwitchContainer>
        <Checkbox checked={checked} onChange={handleChange} />
        <Slider checked={checked} />
      </SwitchContainer>
      <span>{`Toggle ${checked ? "ON" : "OFF"}`}</span>
    </Container>
  );
};
