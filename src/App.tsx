import { useState } from "react";
import { Modal, Button } from "./components";
import { MdClose } from "react-icons/md";
import { CenterContainer } from "./layouts/CenterContainer";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <CenterContainer>
      <Button onClick={() => setIsOpen(true)}>Document Upload</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Button onClick={() => setIsOpen(false)}>
          <MdClose />
        </Button>
      </Modal>
    </CenterContainer>
  );
}

export default App;
