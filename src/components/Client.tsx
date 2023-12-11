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
            label: "Client 1",
            value: "Client 1",
          },
          {
            label: "Client 2",
            value: "Client 2",
          },
          {
            label: "Client 3",
            value: "Client 3",
          },
          {
            label: "Client 4",
            value: "Client 4",
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
