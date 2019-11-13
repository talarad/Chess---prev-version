import React, { useState, useEffect } from 'react';
import './App.css';

export default function Cell(props) {
    if ((props.row + props.column) % 2 !== 0) {
        if (props.cell.side === 'black') {
            if (props.cell.clicked) {
                return (
                    <div className="black-cell-clicked"  >
                        <img src={require(`./pieces/${props.cell.side}/${props.cell.name}.png`)} onClick={() => props.onCellClick(props.row, props.column)} alt="red" />
                    </div>
                )
            } else {
                if (props.side) {
                    return (
                        <div className="black-cell"  >
                            <img src={require(`./pieces/${props.cell.side}/${props.cell.name}.png`)} onClick={() => props.onCellClick(props.row, props.column)} alt="red" />
                        </div>
                    );
                } else {
                    return (
                        <div className="black-cell" >
                            <img src={require(`./pieces/${props.cell.side}/${props.cell.name}.png`)} onClick={() => props.onCellClick(props.row, props.column)} alt="red" />
                        </div>
                    )
                }
            }
        } else if (props.cell.side === 'white') {
            if (props.cell.clicked) {
                return (
                    <div className="white-cell-clicked"  >
                        <img src={require(`./pieces/${props.cell.side}/${props.cell.name}.png`)} onClick={() => props.onCellClick(props.row, props.column)} alt="red" />

                    </div>
                )
            } else {
                return (
                    <div className="white-cell" >

                        <img src={require(`./pieces/${props.cell.side}/${props.cell.name}.png`)} onClick={() => props.onCellClick(props.row, props.column)} alt="red" />

                    </div>
                )
            }
        } else {
            return (

                <div className="cell" onClick={() => props.onCellClick(props.row, props.column)}>{props.cell.name}</div>
            );
        }
    } else {
        if (props.cell.side === 'black') {
            if (props.cell.clicked) {
                return (
                    <div className="light-black-cell-clicked"  >
                        <img src={require(`./pieces/${props.cell.side}/${props.cell.name}.png`)} onClick={() => props.onCellClick(props.row, props.column)} alt="red" />
                    </div>
                )
            } else {
                if (props.side) {
                    return (
                        <div className="light-black-cell"  >
                            <img src={require(`./pieces/${props.cell.side}/${props.cell.name}.png`)} onClick={() => props.onCellClick(props.row, props.column)} alt="red" />
                        </div>
                    );
                } else {
                    return (
                        <div className="light-black-cell" >
                            <img src={require(`./pieces/${props.cell.side}/${props.cell.name}.png`)} onClick={() => props.onCellClick(props.row, props.column)} alt="red" />
                        </div>
                    )
                }
            }
        } else if (props.cell.side === 'white') {
            if (props.cell.clicked) {
                return (
                    <div className="light-white-cell-clicked"  >
                        <img src={require(`./pieces/${props.cell.side}/${props.cell.name}.png`)} onClick={() => props.onCellClick(props.row, props.column)} alt="red" />

                    </div>
                )
            } else {
                return (
                    <div className="light-white-cell" >
                        <img src={require(`./pieces/${props.cell.side}/${props.cell.name}.png`)} onClick={() => props.onCellClick(props.row, props.column)} alt="red" />
                    </div>
                )
            }
        } else {
            return (
                <div className="light-cell" onClick={() => props.onCellClick(props.row, props.column)}>{props.cell.name}</div>
            );
        }
    }
}

