import React from 'react';
import Item from './Items'

export default function App(){
    return <div className='card'>
        <h1 className='title'>Grocery Bud</h1>
        <form className='form'>
            <input type='text' placeholder='e.g yam'/>
            <button type='submit' className='submit'>Submit</button>
        </form>
        <Item/>
        <button className='clear'>Clear Items</button>
    </div>
}