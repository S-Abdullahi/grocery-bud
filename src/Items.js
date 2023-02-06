import React from "react";
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'

export default function Item(props){
    return (
        <div className="item">
            <p>{props.bud}</p>
            <div className="icon-con">
                <span className="edit" onClick={()=>props.edit(props.index)}><BiEdit/></span>
                <span className="delete" onClick={()=>props.delete(props.index)}><AiFillDelete/></span>
            </div>
        </div>
    )
}