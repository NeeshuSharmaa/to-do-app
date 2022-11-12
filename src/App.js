import React from "react";
import uuid from "react-uuid";
import InputMenu from "./components/InputMenu";
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

  var toDoItems = itemsArray.map((i) => {
    return (
      <ItemsList key={i.id} item={i} deleteItemHandler={deleteItemHandler} />
    );
  });

  return (
    <div className="App">
      <InputMenu
        inputItemHandler={inputItemHandler}
        onAddingItems={onAddingItems}
      />
      <div className="items-list">{toDoItems}</div>
    </div>
  );
}
