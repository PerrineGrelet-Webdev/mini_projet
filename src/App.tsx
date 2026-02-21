import { useState } from "react";
import FormControls from "./components/FormControls";
import ProteinTable from "./components/Proteine";
import { generateWeights } from "./Utils";
import type { ObjectiveKey } from "./Objectives";

export default function App() {
  const [minWeight, setMinWeight] = useState(50);
  const [maxWeight, setMaxWeight] = useState(100);
  const [rows, setRows] = useState(6);
  const [selectedObjectives, setSelectedObjectives] = useState<ObjectiveKey[]>([
    "sedentary",
  ]);

  const toggleObjective = (key: ObjectiveKey) => {
    setSelectedObjectives((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const weights = generateWeights(minWeight, maxWeight, rows);

  return (
    <div>

      <h1 >Tableau de besoins en protéines</h1>
      <>
        <FormControls
          minWeight={minWeight}
          maxWeight={maxWeight}
          rows={rows}
          selectedObjectives={selectedObjectives}
          setMinWeight={setMinWeight}
          setMaxWeight={setMaxWeight}
          setRows={setRows}
          toggleObjective={toggleObjective}
        />
      </>

      <>
        <ProteinTable
          weights={weights}
          selectedObjectives={selectedObjectives}
        />
      </>
    </div>

  );
}
