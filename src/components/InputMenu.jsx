import React from "react";

export default function InputMenu(props) {
  return (
    <div className="input-menu">
      <input
        type="text"
        class-name="input-box"
        placeholder="type to-do-items here"
        onChange={props.inputItemHandler}
      ></input>
      <button className="add-item-btn" onClick={props.onAddingItems}>
        Add Item
      </button>
    </div>
  );
}
