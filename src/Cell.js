import React from 'react';
import './App.css';

export default function Cell(props) {
    // if(!props.clicked) {

    // }


    if (props.cell.side === 'black') {
        if (props.cell.clicked) {
            return (
                <div className="black-cell-clicked" onClick={() => props.cellOnClick(props.row, props.column)} >{props.cell.name}</div>
            )
        } else {
            return (
                <div className="black-cell" onClick={() => props.cellOnClick(props.row, props.column)} >{props.cell.name}</div>
            );
        }
    } else if (props.cell.side === 'white') {
        if (props.cell.clicked) {
            return (
                <div className="white-cell-clicked" onClick={() => props.cellOnClick(props.row, props.column)} >{props.cell.name}</div>
            )
        } else {
            return (
                <div className="white-cell" onClick={() => props.cellOnClick(props.row, props.column)}>{props.cell.name}</div>
            )
        }
    } else {
        return (
            <div className="cell">{props.cell.name}</div>
        );
    }

}

