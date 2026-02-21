import React from "react";
import { OBJECTIVES } from "../Objectives";
import type { ObjectiveKey } from "../Objectives";
import { formatProteinRange } from "../Utils";

type Props = {
  weights: number[];
  selectedObjectives: ObjectiveKey[];
};

export default function ProteinTable({ weights, selectedObjectives }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Poids (kg)</th>
          {selectedObjectives.map((key) => (
            <th key={key}>{OBJECTIVES[key].label}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {weights.map((w) => (
          <tr key={w}>
            <td>{w}</td>
            {selectedObjectives.map((key) => {
              const obj = OBJECTIVES[key];
              return (
                <td key={key}>
                  {formatProteinRange(w, obj.min, obj.max)}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
