import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Form } from "./components/Form.jsx";

function App() {
  const [activities, setActivities] = useState({});

  function handleAddActivity(newActivity) {
    setActivities(newActivity);
  }
  console.log(activities);
  return <Form onAddActivity={handleAddActivity} />;
}

export default App;
