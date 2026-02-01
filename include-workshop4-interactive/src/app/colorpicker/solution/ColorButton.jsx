"use client"; // Enables client-side interactivity (clicks, state updates)

import "./ColorButton.scss"; // Button styles (size, hover, etc.)

// A reusable button that receives its color and 
// click handler from the parent (via props)
export default function ColorButton({ color, onPick }) {
  return (
    <button
      className="color-btn"
      // Set the button's color
      style={{ backgroundColor: color }} 
      // Call the parent's function with this color when clicked
      onClick={() => onPick(color)} 
    ></button>
  );
}
