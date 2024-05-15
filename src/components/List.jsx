export function List({ activities, onGoodWeather }) {
  console.log(activities);
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
  );
}

// pass prop isGoodWeather
// if activity.isGoodWeather === true
// render list of good weather activities
// else render the rest
