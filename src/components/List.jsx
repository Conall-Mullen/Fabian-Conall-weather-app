import "./List.css";

export function List({ filteredActivities, onDeleteActivity }) {
  console.log(filteredActivities);
  return (
    <ul className="list">
      {filteredActivities.map((activity) => (
        <li key={activity.id} className="list-element">
          {activity.name}
          <button
            className="delete-button"
            onClick={() => onDeleteActivity(activity.id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
