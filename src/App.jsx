import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form.jsx";
import { List } from "./components/List.jsx";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }

  console.log(activities);
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <List />
    </>
  );
}

export default App;
