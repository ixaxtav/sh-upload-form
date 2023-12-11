import { useState } from "react";
import { Modal, Button, Heading, Select, Divider, Text, FileUpload } from "./components";
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
            <Divider />
            <Text bold>Select a manifest that you'd like to import</Text>
            <FileUpload />
            <Divider />
            <Text bold>Elapse Data Checking:</Text>
            <Text bold color="#59b340">
              No Elapsed Dates!
            </Text>
            <Divider />
            <Text bold>Tolerance Window:</Text>
          </Column>
          <Column>
            <Text bold>Split schedule using social distancing?</Text>
            <Divider />
            <Text bold>Location Checking:</Text>
            <Text bold color="#59b340">
              All Available!
            </Text>
            <Divider />
            <Text bold>Client:</Text>
          </Column>
        </Row>
        <h3 style={{ textAlign: "center", marginTop: "35px", marginBottom: "25px" }}>Data in the import file is correct. Please press Continue to import.</h3>
        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <div style={{ width: "200px" }}>
            <Button onClick={() => console.log("Continue")} width="100%">
              Continue Import
            </Button>
          </div>
          <div style={{ width: "200px" }}>
            <Button onClick={() => setIsOpen(false)} variant="outline" width="100%">
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </CenterContainer>
  );
}

export default App;
