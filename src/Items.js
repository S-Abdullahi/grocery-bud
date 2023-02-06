import React from "react";
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'

export default function Item(){
    return (
        <div className="item">
            <p>Yam</p>
            <div className="icon-con">
                <span className="edit"><BiEdit/></span>
                <span className="delete"><AiFillDelete/></span>
            </div>
        </div>
    )
}