import React, { useState, useEffect } from 'react';
import './App.css';

export default function Cell(props) {

if(props.row % 2 === 0 && props.column % 2 !== 0) {
    if (props.cell.side === 'black') {
        if (props.cell.clicked) {
            return (
                <div className="Eblack-cell-clicked" onClick={() => props.onCellClick(props.row, props.column)} >{props.cell.name}</div>
            )
        } else {
            return (
                <div className="Eblack-cell" onClick={() => props.onCellClick(props.row, props.column)} >{props.cell.name}</div>
            );
        }
    } else if (props.cell.side === 'white') {
        if (props.cell.clicked) {
            return (
                <div className="Ewhite-cell-clicked" onClick={() => props.onCellClick(props.row, props.column)} >{props.cell.name}</div>
            )
        } else {
            return (
                <div className="Ewhite-cell" onClick={() => props.onCellClick(props.row, props.column)}>{props.cell.name}</div>
            )
        }
    } else {
        return (
            <div className="Ecell" onClick={() => props.onCellClick(props.row, props.column)}>{props.cell.name}</div>
        );
    }
} else {
    if (props.cell.side === 'black') {
        if (props.cell.clicked) {
            return (
                <div className="Oblack-cell-clicked" onClick={() => props.onCellClick(props.row, props.column)} >{props.cell.name}</div>
            )
        } else {
            return (
                <div className="Oblack-cell" onClick={() => props.onCellClick(props.row, props.column)} >{props.cell.name}</div>
            );
        }
    } else if (props.cell.side === 'white') {
        if (props.cell.clicked) {
            return (
                <div className="Owhite-cell-clicked" onClick={() => props.onCellClick(props.row, props.column)} >{props.cell.name}</div>
            )
        } else {
            return (
                <div className="Owhite-cell" onClick={() => props.onCellClick(props.row, props.column)}>{props.cell.name}</div>
            )
        }
    } else {
        return (
            <div className="Ocell" onClick={() => props.onCellClick(props.row, props.column)}>{props.cell.name}</div>
        );
    }
}

}

