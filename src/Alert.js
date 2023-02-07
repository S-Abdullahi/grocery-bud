import React from 'react';

export default function Alert({show, msg, type}){
    return (
        <p className={`alert ${type}`}>{msg}</p>
    )
}