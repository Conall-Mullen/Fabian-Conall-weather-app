import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Form } from "./components/Form.jsx";

function App() {
  function handleAddActivity(newActivity) {
    console.log(newActivity);
  }
  return <Form onAddActivity={handleAddActivity} />;
}

export default App;
