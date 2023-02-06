import React, { useState } from "react";
import Item from "./Items";

export default function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [clear, setClear] = useState(false);
  const [edit, setEdit] = useState(false)
  let alertText = "hello";

  function handleSubmit(e) {
    e.preventDefault();
    item === ""
      ? (alertText = "enter item")
       : setList((prev) => {
          return [...prev, item];
        });
    setItem("");
    setClear(true);
  }

  function clearList() {
    setList([]);
    setClear(false);
  }

  function deleteItem(ind) {
    const newList = list.filter((_, index) => index !== ind);
    setList(newList);
    if(newList.length === 0){
        setClear(false)
    }
  }

  function editItem(ind){
    const editBud = list.find((_, index) => index === ind)
    setItem(editBud)
    setEdit(true)
  }

  return (
    <div className="card">
      <p className="alert">{alertText}</p>
      <h1 className="title">Grocery Bud</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g yam"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button type="submit" className="submit">
          {edit ? 'Edit' : 'submit'}
        </button>
      </form>
      {list.map((bud, index) => {
        return <Item key={index} bud={bud} index={index} delete={deleteItem} edit={editItem}/>;
      })}
      {clear && (
        <button className="clear" onClick={() => clearList()}>
          Clear Items
        </button>
      )}
      {/* <button className='clear'>Clear Items</button> */}
    </div>
  );
}
