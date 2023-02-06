import React, {useState} from 'react';
import Item from './Items'

export default function App(){
    const [list, setList] = useState([])
    const [item, setItem] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        setList(prev => {
            return [prev, item]
        })
        console.log(item)
    }
    console.log(list)

    return <div className='card'>
        {/* <p className='alert'>item deleted</p> */}
        <h1 className='title'>Grocery Bud</h1>
        <form className='form' onSubmit={handleSubmit}>
            <input type='text' placeholder='e.g yam' value={item} onChange={(e)=>{
                setItem(e.target.value)}}/>
            <button type='submit' className='submit' >Submit</button>
        </form>
        {/* <Item/> */}
        {/* <button className='clear'>Clear Items</button> */}
    </div>
}