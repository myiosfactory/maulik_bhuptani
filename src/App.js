import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import CursorTracker from "./components/cursorTracker/CursorTracker";

function App() {
  return (
    <div>
      <CursorTracker />
      <Main />
    </div>
  );
}

export default App;
