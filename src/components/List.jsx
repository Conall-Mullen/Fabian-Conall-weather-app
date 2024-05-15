export function List({ filteredActivities }) {
  console.log(filteredActivities);
  return (
    <ul>
      {filteredActivities.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
  );
}

// pass prop isGoodWeather
// if activity.isGoodWeather === true
// render list of good weather activities
// else render the rest
