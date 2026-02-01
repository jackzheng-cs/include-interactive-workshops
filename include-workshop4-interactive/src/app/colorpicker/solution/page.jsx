"use client"; // Needed for client-side interactivity (useState, onClick)

import { useState } from "react";
import Link from "next/link";
import "./ColorPicker.scss";
import ColorButton from "./ColorButton";

export default function ColorPickerSolution() {
  // Track the current background color
  const [bg, setBg] = useState("white");

  // A list of colors to display as buttons
  const palette = [
    { name: "Red", hex: "#f87171" },
    { name: "Blue", hex: "#60a5fa" },
    { name: "Green", hex: "#34d399" },
    { name: "Yellow", hex: "#fbbf24" },
  ];

  return (
    <div className="color-picker" style={{ backgroundColor: bg }}>
      <h1 className="solution-title">Solution: Color Picker</h1>
      <p className="solution-subtitle">
        Try clicking each color below to change the background!
      </p>

      {/* Loop through the palette array and render one ColorButton for each color */}
      <div className="button-container">
        {palette.map((c) => (
          <ColorButton key={c.name} color={c.hex} onPick={setBg} />
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="nav-links">
        <Link href="/colorpicker" className="nav-btn back">
          Back to Code-Along
        </Link>
        <Link href="/" className="nav-btn home">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
