export function Form(onAddActivity) {
  return (
    <>
      <h1>Add new Activity</h1>
      <form>
        <label htmlFor="text">Name: </label>
        <input type="text" /> <br />
        <label htmlFor="checkbox">Good-weather activity</label>
        <input type="checkbox" /> <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
