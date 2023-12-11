import { useState } from "react";
import { Modal, Button, Heading } from "./components";
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
          <Column>Column 1</Column>
          <Column>Column 2</Column>
        </Row>
      </Modal>
    </CenterContainer>
  );
}

export default App;
