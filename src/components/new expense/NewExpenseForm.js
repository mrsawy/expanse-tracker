import React from "react";

import "./NewExpenseForm.css";
let id = 1;

function NewExpenseForm(props) {
  const date = new Date();
  const [monthNow, dayNow, yearNow] = date
    .toLocaleDateString()
    .split(`/`)
    .map((e) => {
      return e.length == 1 ? `0${e}` : e;
    });
  let maxDate = `${yearNow}-${monthNow}-${dayNow}`;

  console.log(maxDate);

  const [state, setState] = React.useState({ title: ``, amount: ``, day: `` });

  const { title, amount, day } = state;

  function handleChange(event) {
    const { value, name } = event.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const date = new Date(day);

    props.onSave({ title, amount, date, id: id, key: id });
    id = id + 1;

    setState({ title: ``, amount: ``, day: `` });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            value={state.title}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required={true}
            name="amount"
            value={state.amount}
            onChange={handleChange}
            type="number"
          />
        </div>
        <div className="new-expense__control">
          <label>Day</label>
          <input
            required={true}
            name="day"
            value={state.day}
            onChange={handleChange}
            type="date"
            min="2019-06-01"
            max={maxDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
