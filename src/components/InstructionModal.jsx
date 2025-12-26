import React from "react";
import "./InstructionModal.css";

export default function InstructionModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="instruction-modal-backdrop" onClick={onClose}>
      <div
        className="instruction-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>¿Cómo se juega en Multiplicación?</h2>

        <p className="desc">
          Cada número de arriba se obtiene multiplicando los dos de abajo.<br />
          Y si conocés un número de arriba y uno de abajo, podés obtener el otro <b>dividiendo</b>.
        </p>

        <div className="example-container">
          {/* ---  MINI PIRÁMIDE --- */}
          <div className="mini-pyramid">
            <div className="mini-row">
              <div className="mini-node highlight-parent">42</div>
            </div>

            <div className="mini-row">
              <div className="mini-node highlight-child-left">6</div>
              <div className="mini-node highlight-child-right">7</div>
            </div>
          </div>

          <p className="explanation">
            Ejemplo:<br />
            <span className="sum">6 × 7 = 42</span><br />
            Si conocés <b>42</b> y <b>6</b>:  
            <span className="resta">42 ÷ 6 = 7</span>
          </p>
        </div>

        <button className="close-btn" onClick={onClose}>Cerrar</button>
      </div>
      <div
        className="instruction-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>¿Cómo se juega en Suma?</h2>

        <p className="desc">
          Cada número de arriba se obtiene sumando los dos de abajo.<br />
          Y si conocés un número de arriba y uno de abajo, podés obtener el otro <b>restando</b>.
        </p>

        <div className="example-container">
          {/* ---  MINI PIRÁMIDE --- */}
          <div className="mini-pyramid">
            <div className="mini-row">
              <div className="mini-node highlight-parent">15</div>
            </div>

            <div className="mini-row">
              <div className="mini-node highlight-child-left">8</div>
              <div className="mini-node highlight-child-right">7</div>
            </div>
          </div>

          <p className="explanation">
            Ejemplo:<br />
            <span className="sum">8 + 7 = 15</span><br />
            Si conocés <b>15</b> y <b>8</b>:  
            <span className="resta">15 - 8 = 7</span>
          </p>
        </div>

        <button className="close-btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}