import { useState } from "react";
import { Modal, Button } from "./components";
import { MdClose } from "react-icons/md";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Document Upload</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Button onClick={() => setIsOpen(false)}>
          <MdClose />
        </Button>
      </Modal>
    </div>
  );
}

export default App;
