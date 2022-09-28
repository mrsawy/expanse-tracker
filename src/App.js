import ExpenseItem from "./components/expenses/ExpenseItem.js";
import "./components/expenses/expenseItem.css";
import NewExpense from "./components/new expense/NewExpense.js";
import React from "react";
import ExpenseChart from "./components/expenses/expenseChart.js";

function App() {
  const [expenses, setExpenses] = React.useState([]);
  const [selectedYear, setSelectedYear] = React.useState(`All`);

  const [filteredExpenses, setFilteredExpenses] = React.useState(
    expenses
      .map((e) => {
        return e.date.getFullYear() == selectedYear || selectedYear == "All" ? (
          <ExpenseItem
            date={e.date}
            title={e.title}
            amount={e.amount}
            key={e.key}
            id={e.id}
          />
        ) : null;
      })
      .filter((e) => e != null)
  );

  const dropdownChangeHandler = (event) => {
    console.log(filteredExpenses);

    const newValue = event.target.value;
    setSelectedYear(newValue);
    console.log(newValue);
    console.log(
      expenses.map((e) => e.date.toLocaleString(`en-US`, { year: `numeric` }))
    );

    setFilteredExpenses(
      expenses
        .map((e, i) => {
          return e.date.getFullYear() == newValue || newValue == "All" ? (
            <ExpenseItem
              date={e.date}
              title={e.title}
              amount={e.amount}
              key={e.key}
              id={e.id}
            />
          ) : null;
        })
        .filter((e) => e != null)
    );
  };

  function onSave(data) {
    setExpenses((prevValue) => {
      return data ? [data, ...prevValue] : [...prevValue];
    });
    setFilteredExpenses(
      [data, ...expenses]
        .map((e, i) => {
          return e.date.getFullYear() == selectedYear ||
            selectedYear == "All" ? (
            <ExpenseItem
              date={e.date}
              title={e.title}
              amount={e.amount}
              key={e.key}
              id={e.id}
            />
          ) : null;
        })
        .filter((e) => e != null)
    );
  }

  return (
    <div className="expenses">
      <div>
        <NewExpense onSave={onSave} />
      </div>
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select value={selectedYear} onChange={dropdownChangeHandler}>
            <option value="All">All</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
          </select>
        </div>
      </div>
      <ExpenseChart expenses={filteredExpenses.map((e) => e.props)} />

      {filteredExpenses}
      {filteredExpenses.length == 0 ? ( <div className="no-expense">  <h2 >no expenses</h2></div>
      
      ) : null}
    </div>
  );
}

export default App;
