import useLocalStorageState from "use-local-storage-state";

export function List({ activities }) {
  console.log(activities);
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
  );
}

//
