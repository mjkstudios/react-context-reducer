import React from "react";
import { useGlobalState } from "./Provider";

const Items = () => {
  const [{ items }, dispatch] = useGlobalState();
  const [value, setValue] = React.useState("");

  return (
    <div>
      <input
        type="text"
        onChange={event => setValue(event.target.value)}
        onKeyDown={event => {
          if (event.key === "Enter") {
            dispatch({ type: "ADD_ITEM", payload: event.target.value });
            setValue(""); // Clear local state
          }
        }}
        value={value}
      />
      {items.length > 0 && (
        <ul>
          {items.map(item => (
            <li
              key={item.id}
              onClick={() =>
                dispatch({ type: "MARK_AS_DONE", payload: item.id })
              }
              style={item.done ? { textDecoration: "line-through" } : null}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Items;
