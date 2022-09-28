import "./expenseDate.css"

function ExpenseDate(props) {
  const options = {
    month: "long",
    day: `numeric`,
    year: `numeric`,
  };
  const date = props.date.toLocaleString(`en-US`, options).split(` `);

  return <div className="expense-date">
    <div className="expense-date__month">{date[0]}</div>
    <div className="expense-date__day">{date[1]}</div>
    <div className="expense-date__year">{date[2]}</div>
  
  </div>
  
  ;
}

export default ExpenseDate ;
