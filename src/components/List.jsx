export function List({ filteredActivities, onDeleteActivity }) {
  console.log(filteredActivities);
  return (
    <ul>
      {filteredActivities.map((activity) => (
        <li key={activity.id}>
          {activity.name}
          <button onClick={() => onDeleteActivity(activity.id)}>x</button>
        </li>
      ))}
    </ul>
  );
}
