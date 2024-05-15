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

  function handleGoodWeather() {
    setActivities(
      activities.filter(
        (activity) => activity.isForGoodWeather === isGoodWeather
      )
    );
    // console.log(activities);
  }
  handleGoodWeather();
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} onGoodWeather={handleGoodWeather} />
    </>
  );
}

export default App;
