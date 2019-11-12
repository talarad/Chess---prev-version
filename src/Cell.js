import React, { useState, useEffect } from 'react';
import './App.css';

export default function Cell(props) {

    if (props.cell.side === 'black') {
        if (props.cell.clicked) {
            return (
                <div className="black-cell-clicked" onClick={() => props.onCellClick(props.row, props.column)} >{props.cell.name}</div>
            )
        } else {
            return (
                <div className="black-cell" onClick={() => props.onCellClick(props.row, props.column)} >{props.cell.name}</div>
            );
        }
    } else if (props.cell.side === 'white') {
        if (props.cell.clicked) {
            return (
                <div className="white-cell-clicked" onClick={() => props.onCellClick(props.row, props.column)} >{props.cell.name}</div>
            )
        } else {
            return (
                <div className="white-cell" onClick={() => props.onCellClick(props.row, props.column)}>{props.cell.name}</div>
            )
        }
    } else {
        return (
            <div className="cell" onClick={() => props.onCellClick(props.row, props.column)}>{props.cell.name}</div>
        );
    }

}

