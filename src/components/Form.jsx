import { uid } from "uid";

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
    <>
      <h1>Add new Activity</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input name="name" id="name" type="text" /> <br />
        <label htmlFor="is-good-weather">Good-weather activity</label>
        <input
          name="is-good-weather"
          type="checkbox"
          id="is-good-weather"
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
