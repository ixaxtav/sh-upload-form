import styled from "styled-components";
import { Select } from "./";
import { Circle } from "./Circle";

const ClientContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  gap: 15px;
  max-width: 355px;
`;

const NameContainer = styled.div`
  width: 240px;
`;

type ClientProps = {
  name: string;
};

export const Client = ({ name }: ClientProps) => {
  return (
    <ClientContainer>
      <NameContainer>
        <p style={{ margin: 0 }}>{name}</p>
      </NameContainer>
      <Select
        placeholder="Select Client"
        options={[
          {
            label: "Testing Center 1",
            value: "Testing Center 1",
          },
          {
            label: "Testing Center 2",
            value: "Testing Center 2",
          },
          {
            label: "Testing Center 3",
            value: "Testing Center 3",
          },
          {
            label: "Testing Center 4",
            value: "Testing Center 4",
          },
        ]}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <div>
        <Circle />
      </div>
    </ClientContainer>
  );
};
