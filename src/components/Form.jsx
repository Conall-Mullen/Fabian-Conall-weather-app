// eslint-disable-next-line react/prop-types
export function Form({ onAddActivity }) {
  //
  //   const [checkbox, setCheckbox] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    console.log(formElements);
    onAddActivity({
      name: formElements.name.value,
      isForGoodWeather: formElements["is-good-weather"].checked,
    });
    event.target.reset();
    event.target.name.focus();
    // console.log(event.target.value);
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
