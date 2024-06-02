import React from "react";
import "../styles/Boton.css";

export default function Boton({ text, isbuttonclick, handle_click }) {
  return (
    <button
      className={isbuttonclick ? "boton-clic" : "boton-reiniciar"}
      onClick={handle_click}
    >
      {text}
    </button>
  );
}
