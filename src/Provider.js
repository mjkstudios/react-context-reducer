import React from "react";
import reducer from "./reducer";

export const Context = React.createContext();

const Provider = props => (
  <Context.Provider
    value={React.useReducer(reducer, { items: [] })}
    {...props}
  />
);

export const useGlobalState = () => React.useContext(Context);

export default Provider;
