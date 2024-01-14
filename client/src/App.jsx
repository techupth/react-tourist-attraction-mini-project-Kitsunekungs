import "./App.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import InputSearch from "./components/search";

function App() {
  return (
    <div className="App">
      <InputSearch />
    </div>
  );
}

export default App;
