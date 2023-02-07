import React, { useState, useEffect } from "react";
import Item from "./Items";
import Alert from "./Alert";

export default function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [clear, setClear] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  useEffect(() => {
    const timeout = setTimeout(() => {
      alertFun(false, "", "");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [list]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!item) {
      alertFun(true, "enter a value", "danger");
    } else if (item && edit) {
      setList(
        list.map((el) => {
          if (el.id === editID) {
            return { ...el, title: item };
          }
          return el;
        })
      );
      setEdit(false)
      setEditID(null)
      alertFun(true, 'value changed', 'success')
    } else {
      setList((prev) => {
        const newItem = { id: new Date().getTime().toString(), title: item };
        return [...prev, newItem];
      });
      alertFun(true, "item added", "success");
    }

    setItem("");
    setClear(true);
  }

  function clearList() {
    setList([]);
    setClear(false);
    alertFun(true, "all items cleared", "success");
  }

  function deleteItem(ind) {
    const newList = list.filter((el, index) => el.id !== ind);
    setList(newList);
    if (newList.length === 0) {
      setClear(false);
    }
    alertFun(true, "item deleted", "success");
  }

  function editItem(ind) {
    const editBud = list.find((el, index) => el.id === ind);
    setItem(editBud.title);
    setEdit(true);
    setEdit(ind);
  }

  function alertFun(show = "false", msg = "", type = "") {
    setAlert({ show: show, msg: msg, type: type });
  }

  return (
    <div className="card">
      {alert.show && <Alert {...alert} />}
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
          {edit ? "Edit" : "submit"}
        </button>
      </form>
      {list.map((bud, index) => {
        return (
          <Item
            key={index}
            {...bud}
            index={index}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        );
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
