import { useState } from "react";
import { Modal } from "./components";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Modal</p>
      </Modal>
    </div>
  );
}

export default App;
