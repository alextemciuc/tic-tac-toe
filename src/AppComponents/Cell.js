import React from "react";
import './Cell.css';

function Cell(props) {

    const cls = ['cell'];
    
    if (props.cell.id === 1 || props.cell.id === 2 || props.cell.id === 3) {
        cls.push('top');
    }
    
    if (props.cell.id === 3 || props.cell.id === 6 || props.cell.id === 9) {
        cls.push('right');
    }

    if (props.cell.id === 7 || props.cell.id === 8 || props.cell.id === 9) {
        cls.push('bottom');
    }

    if (props.cell.id === 1 || props.cell.id === 4 || props.cell.id === 7) {
        cls.push('left');
    }

    // console.log(cls);

    return (
        <div className={cls.join(' ')} onClick={() => props.handleCells(props.cell.id)}>{props.cell.content}</div>
    );
}

export default Cell;
