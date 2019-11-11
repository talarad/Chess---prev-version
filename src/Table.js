import React from 'react';
import './App.css';

export default function Table(props) {

    return (
        <div>
            {props.table.map((row, counter) => {
                return (<div className="row" key={counter}>{row.map((cell, index) => {
                    return (<div className="empty" key={index}>{cell}</div>)
                })}</div>)
            })
            }
        </div>
    )
}