import styled from "styled-components";

export const Circle = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: #19075d 1px solid;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: #19075d;
  }

  &::before {
    top: 50%;
    left: 15%;
    width: 37%;
    height: 1px;
    transform: translateY(-50%);
  }

  &::after {
    top: 50%;
    left: 50%;
    width: 40.71%;
    height: 1px;
    background-color: #19075d;
    transform: translateY(-50%) rotateZ(45deg);
    transform-origin: 0 0;
  }
`;
