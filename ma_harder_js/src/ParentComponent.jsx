import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import "./style.css";

export default function ParentComponent() {
    const [selectedCells, setSelectedCells] = useState([false, false, false, false]);

    const toggleCellSelection = (index) => {
        setSelectedCells((prevSelectedCells) => {
            const newSelectedCells = [...prevSelectedCells];
            newSelectedCells[index] = !newSelectedCells[index];
            return newSelectedCells;
        });
    };

    const selectedCount = selectedCells.filter(isSelected => isSelected).length;

    return (
        <div>
            <h1>Count: {selectedCount}</h1>
            <div className="grid">
                {selectedCells.map((isSelected, index) => (
                    <ChildComponent
                        key={index}
                        isSelected={isSelected}
                        toggleSelection={() => toggleCellSelection(index)}
                    />
                ))}
            </div>
        </div>
    );
}
