import { uid } from "uid";
import "./Form.css";

export function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;

    onAddActivity({
      name: formElements.name.value,
      isForGoodWeather: formElements["is-good-weather"].checked,
      id: uid(),
    });
    event.target.reset();
    event.target.name.focus();
  }

  return (
    <div>
      <h2>Add new Activity</h2>
      <form onSubmit={handleSubmit}>
        <div className="name-input">
          <label htmlFor="name">Name: </label>
          <input name="name" id="name" type="text" />{" "}
        </div>
        <div className="is-good-weather-input">
          <label htmlFor="is-good-weather">Good-weather activity</label>
          <input
            name="is-good-weather"
            type="checkbox"
            id="is-good-weather"
          />{" "}
        </div>

        <button className="button-element" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
