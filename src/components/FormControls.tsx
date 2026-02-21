import React from "react";
import { OBJECTIVES } from "../Objectives";
import type { ObjectiveKey } from "../Objectives";


type Props = {
  minWeight: number;
  maxWeight: number;
  rows: number;
  selectedObjectives: ObjectiveKey[];
  setMinWeight: (n: number) => void;
  setMaxWeight: (n: number) => void;
  setRows: (n: number) => void;
  toggleObjective: (key: ObjectiveKey) => void;
};

export default function FormControls({
  minWeight,
  maxWeight,
  rows,
  selectedObjectives,
  setMinWeight,
  setMaxWeight,
  setRows,
  toggleObjective,
}: Props) {
  return (
    <section className="bloc-double">

      <div className="card">
        <h2>Paramètres</h2>

        <div id="parametre">
          <label>
            Poids minimum :
            <input
              type="number"
              value={minWeight}
              onChange={(e) => setMinWeight(Number(e.target.value))}
            />
          </label>

          <label>
            Poids maximum :
            <input
              type="number"
              value={maxWeight}
              onChange={(e) => setMaxWeight(Number(e.target.value))}
            />
          </label>

          <label>
            Nombre de lignes :
            <input
              type="number"
              value={rows}
              onChange={(e) => setRows(Number(e.target.value))}
            />
          </label>
        </div>
      </div>

      <div className="card">
        <h2>Objectifs</h2>

        <div className="liste-choix">
          {(Object.keys(OBJECTIVES) as ObjectiveKey[]).map((key) => (
            <label key={key} className="choix">
              <input
                type="checkbox"
                checked={selectedObjectives.includes(key)}
                onChange={() => toggleObjective(key)}
              />
              {OBJECTIVES[key].label}
            </label>
          ))}
        </div>
      </div>

    </section>
  );
}
