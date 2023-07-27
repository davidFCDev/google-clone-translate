import { useReducer } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Action, type State } from "./types";



function App() {
 

  return (
    <div className="app">
      <h1>Google Translate</h1>
      <button
        onClick={() => dispatch({ type: "SET_FROM_LANGUAGE", payload: "es" })}
      >
        Cambiar a Español{" "}
      </button>
    </div>
  );
}

export default App;
