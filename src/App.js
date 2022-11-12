import React from "react";
import uuid from "react-uuid";
import ItemsList from "./components/ItemsList";

export default function App() {
  var [item, setItem] = React.useState("");
  var [itemsArray, setItemsArray] = React.useState([]);

  function inputItemHandler(e) {
    setItem(e.target.value);
  }

  function onAddingItems() {
    const newItem = {
      id: uuid(),
      itemName: item,
    };
    setItemsArray([...itemsArray, newItem]);
  }

  function deleteItemHandler(idToDelete) {
    var arrayAfterItemDelete = itemsArray.filter(
      (item) => item.id !== idToDelete
    );
    setItemsArray(arrayAfterItemDelete);
  }

  var arrayList = itemsArray.map((i) => {
    return (
      <ItemsList key={i.id} item={i} deleteItemHandler={deleteItemHandler} />
    );
  });

  return (
    <div className="App">
      <input
        type="text"
        class-name="input-box"
        placeholder="type to-do-items here"
        onChange={inputItemHandler}
      ></input>
      <button className="add-item-btn" onClick={onAddingItems}>
        Add Item
      </button>
      <div className="items-list">{arrayList}</div>
    </div>
  );
}
