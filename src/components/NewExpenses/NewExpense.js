import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  // reacive the value from the child components
  const saveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onExpense(expenseData);
    setIsAdding(false);
  };

  // Open form conditionally
  const startAddingHandler = () => {
    setIsAdding(true);
  };
  const stopAddingHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {!isAdding && (
        <button onClick={startAddingHandler}>Add New Expense</button>
      )}
      {isAdding && (
        <ExpenseForm
          onSaveData={saveDataHandler}
          onCanselClick={stopAddingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
