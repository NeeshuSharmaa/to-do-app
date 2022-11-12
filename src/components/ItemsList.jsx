import React from "react";

export default function ItemsList(props) {
  return (
    <div className="items-list">
      <p key={props.item.id}>
        {props.item.itemName}
        <button className="edit-item-btn">Edit</button>
        <button
          className="delete-btn"
          // Error msg: too many re-renders, exceeding react limit, so added fxn
          onClick={() => {
            props.deleteItemHandler(props.item.id);
            console.log("item Deleted");
          }}
        >
          Delete
        </button>
      </p>
    </div>
  );
}
