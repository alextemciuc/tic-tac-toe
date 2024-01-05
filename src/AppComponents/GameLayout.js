import React from "react";
import Cell from "./Cell";
import "./GameLayout.css";

function GameLayout(props) {
    
    return (
        <div className="gameLayout">
            {props.cells.map((cell) => {
                return (
                    <Cell cell={cell} key={cell.id} handleCells={props.handleCells} />
                )
            })}
        </div>
    );
}

export default GameLayout;
