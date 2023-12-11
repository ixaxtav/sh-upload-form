import { useState } from "react";
import { Modal, Button, Heading, Select, Divider, Text, FileUpload, Switch, Circle, RadioButtonGroup, Client } from "./components";
import { MdClose } from "react-icons/md";
import { CenterContainer } from "./layouts/CenterContainer";
import { Row } from "./layouts/Row";
import { Column } from "./layouts/Column";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [splitSchedule, setSplitSchedule] = useState("Yes");
  const [client, setClient] = useState("Multiple");

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
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <Switch />
              <div style={{ width: "1px", height: "20px", backgroundColor: "#19075d" }} />
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                <Circle />
                <span>Select Tolerance Level</span>
              </div>
            </div>
          </Column>
          <Column>
            <Text bold>Split schedule using social distancing?</Text>
            <RadioButtonGroup name="social-distancing" options={["Yes", "No"]} value={splitSchedule} onChange={(e) => setSplitSchedule(e.target.value)} />
            <Divider />
            <Text bold>Location Checking:</Text>
            <Text bold color="#59b340">
              All Available!
            </Text>
            <Divider />
            <Text bold>Client:</Text>
            <RadioButtonGroup name="client" options={["Single", "Multiple"]} value={client} onChange={(e) => setClient(e.target.value)} />
            {[
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
            ].map((client) => (
              <Client name={client.label} />
            ))}
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
