import { useState } from "react";
import { Modal, Button, Heading, Select } from "./components";
import { MdClose } from "react-icons/md";
import { CenterContainer } from "./layouts/CenterContainer";
import { Row } from "./layouts/Row";
import { Column } from "./layouts/Column";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <CenterContainer>
      <Button onClick={() => setIsOpen(true)}>Document Upload</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Button onClick={() => setIsOpen(false)}>
          <MdClose />
        </Button>
        <Heading>Document Upload</Heading>
        <Row>
          <Column>
            <Select
              placeholder="Select Import Name:"
              options={[
                {
                  label: "Testing Name 1",
                  value: "Testing Name 1",
                },
                {
                  label: "Testing Name 2",
                  value: "Testing Name 2",
                },
                {
                  label: "Testing Name 3",
                  value: "Testing Name 3",
                },
                {
                  label: "Testing Name 4",
                  value: "Testing Name 4",
                },
              ]}
              bold
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </Column>
          <Column>Column 2</Column>
        </Row>
      </Modal>
    </CenterContainer>
  );
}

export default App;
