import React from "react";
import "./style.css";

export default function ChildComponent({ isSelected, toggleSelection }) {
    return (
        <div
            className={`cell ${isSelected ? "black" : ""}`}
            onClick={toggleSelection}
        >
        </div>
    );
}
