import { use, useEffect, useMemo, useState } from "react";
import Crypto from "./crypto";
import Counter from "./counter";
import "./App.css";

function App() {
   
  return (
    <div className="app">
      <Crypto />
      <Counter />
    </div>
  );
}

export default App;
