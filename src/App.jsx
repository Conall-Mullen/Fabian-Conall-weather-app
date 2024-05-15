import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form.jsx";
import { List } from "./components/List.jsx";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const URL =
    "https://example-apis-qays8irhv-neuefische.vercel.app/api/weather";

  // const isGoodWeather = true;
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(URL);
      const data = await response.json();
      setWeatherData(data);
    }
    startFetching();
  }, []);

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weatherData.isGoodWeather
  );

  // handleGoodWeather();
  return (
    <>
      <h1>{weatherData.condition}</h1>
      <h2>{weatherData.temperature}°C</h2>
      <Form onAddActivity={handleAddActivity} />
      <List filteredActivities={filteredActivities} />
    </>
  );
}

export default App;
