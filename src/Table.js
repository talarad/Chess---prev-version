import React, { useState, useEffect } from 'react';
import Cell from './Cell'
import './App.css';

export default function Table(props) {
    
    return (
        <div>
            {props.table.map((row, counter) => {
                return (<div className="row" key={counter}>{row.map((cell, index) => {
                    return (<Cell key={index} row={counter} column={index} cell={cell}
                        onCellClick={(row, column) => props.onCellClick(row, column)} clicked={props.clicked}
                        onMpve={(row, column) => props.onCellClick(row, column)} />)
                })}</div>)
            })
            }
        </div>
    )
}