// import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form.jsx";
import { List } from "./components/List.jsx";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const isGoodWeather = true;

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  // handleGoodWeather();
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <List filteredActivities={filteredActivities} />
    </>
  );
}

export default App;
