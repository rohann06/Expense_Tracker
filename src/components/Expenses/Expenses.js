import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filter, setFliter] = useState("2021");

  const filterHandeler = (year) => {
    setFliter(year);
  };

  //get the filtered data
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });


  

  return (
    
    <Card className="expenses">
      
      <ExpensesFilter selected={filter} onFilterChange={filterHandeler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>

    </Card>
  );
};

export default Expenses;
