import React from "react";
import './Cell.css';
import { FaX, FaO } from "react-icons/fa6";

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

  function getCellIcon() {
    if (props.cell.content === 'X') {
      return (
        <FaX className="cell-content" size="8em" />
      );
    } else if (props.cell.content === 'O') {
      return (
        <FaO className="cell-content" size="8em" />
      );
    }
    return props.cell.content;
  }

  return (
    <div className={cls.join(' ')} onClick={() => props.handleCells(props.cell.id)}>{getCellIcon()}</div>
  );
}

export default Cell;
