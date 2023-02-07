import React from "react";
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'

export default function Item({id, title, deleteItem, editItem}){
    return (
        <div className="item">
            <p>{title}</p>
            <div className="icon-con">
                <span className="edit" onClick={()=>editItem(id)}><BiEdit/></span>
                <span className="delete" onClick={()=>deleteItem(id)}><AiFillDelete/></span>
            </div>
        </div>
    )
}