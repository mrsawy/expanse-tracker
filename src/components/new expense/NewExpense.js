import react from "react";

import "./newExpense.css";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props) {
  function onSave(data) {
    props.onSave(data);
  }


  return (
    <div>
      <div className="new-expense">
        <NewExpenseForm onSave={onSave} />
      </div>
      
    </div>
  );
}

export default NewExpense;
