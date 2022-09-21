import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // State
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // Events
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const amoumtHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  // Submit
  const suibmitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };


    // to pass the props to the parrent components
    props.onSaveData(expenseData);

    // Reset the Form value
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form action="submit" onSubmit={suibmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Expense name"
            value={title} // foe two-way binding
            onChange={titleHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Expense amount"
            min="10"
            value={amount}
            onChange={amoumtHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} onChange={dateHandler} />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCanselClick}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
