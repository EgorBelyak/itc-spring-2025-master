import "./App.css";
import { useState } from "react";
import { Table } from "./components/Table";
import { Form } from "./components/Form";
import { Memo } from "./components/Memo";

const initialData = [
  { id: 1, name: "Петр Сидоров", city: "Екатеринбург" },
  { id: 2, name: "Иван Сидоров", city: "Екатеринбург" },
  { id: 3, name: "Сидор Сидоров", city: "Екатеринбург" },
  { id: 4, name: "Иннокентий Сидоров", city: "Екатеринбург" },
];

function App() {
  const [rows, setRows] = useState(initialData);
  const [currentRow, setCurrentRow] = useState(-1);

  const getCurrentRow = () => {
    const row = rows.find((r) => r.id === currentRow);
    return row || {};
  };

  return (
    <>
      <Table rows={rows} setCurrentRow={setCurrentRow} currentRow={currentRow} />

      <Form
        row={getCurrentRow()}
        setRows={setRows}
        setCurrentRow={setCurrentRow}
      />

      <Memo />
    </>
  );
}

export default App;
