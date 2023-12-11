import styled from "styled-components";

const CustomDivider = styled.hr`
  border: none;
  border-top: 1px solid #cdccdd;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 0;
  max-width: 350px;
`;

export const Divider = () => {
  return <CustomDivider />;
};
