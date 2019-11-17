import React from "react";
import Provider from "./Provider";
import Items from "./Items";

function App() {
  return (
    <Provider>
      <Items />
    </Provider>
  );
}

export default App;
