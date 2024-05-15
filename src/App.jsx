// import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form.jsx";
import { List } from "./components/List.jsx";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }

  console.log("activities", activities);
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </>
  );
}

export default App;
