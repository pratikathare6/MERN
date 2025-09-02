import { lazy } from "react";
const  Dashboard = lazy(()=>import("./components/dashboard"));
const  Landing = lazy(()=> import("./components/landing"));

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useNavigate } from "react-router-dom";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();

  function landing() {
    navigate("/");
  }

  function dasboard() {
    navigate("/dashboard");
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <button onClick={landing}>Landing</button>
        <button onClick={dasboard}>Dashboard</button>
      </div>
    </div>
  );
}

export default App;
