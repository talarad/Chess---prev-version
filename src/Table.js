import React, { useState, useEffect } from 'react';
import Cell from './Cell'
import './App.css';

export default function Table(props) {
    return (
        <div>{props.table.map(
            (row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <Cell
                            key={cellIndex}
                            row={rowIndex}
                            column={cellIndex}
                            cell={cell}
                            onCellClick={(row, column) => props.onCellClick(row, column)}
                        />))
                    }
                </div>
            ))
        }
        </div>
    )
}