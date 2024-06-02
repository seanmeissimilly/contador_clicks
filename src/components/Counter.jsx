import React from "react";
import "../styles/Contador.css";

export default function Counter({ clicks }) {
  return <div className="contador">{clicks}</div>;
}
