// eslint-disable-next-line react/prop-types
export function Form({ onAddActivity }) {
  //   const [activiy, setActivity] = useState("");
  //   const [checkbox, setCheckbox] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    console.log(formElements);
    onAddActivity({
      name: formElements.name.value,
      isForGoodWeather: formElements.isgoodweather.checked,
    });
    // console.log(event.target.value);
  }

  return (
    <>
      <h1>Add new Activity</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Name: </label>
        <input name="name" type="text" /> <br />
        <label htmlFor="checkbox">Good-weather activity</label>
        <input name="isgoodweather" type="checkbox" /> <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
