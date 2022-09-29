import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");
  
  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    date: '',
  });
  const onTitleChange = (event) => {
      setExpense((prevState) => {
          return { ...prevState, title: event.target.value };
        });
  };
  const onAmountChange = (event) => {
      setExpense((prevState) => {
          return { ...prevState, amount: event.target.value };
        });
    };
    const onDateChange = (event) => {
        setExpense((prevState) => {
            return { ...prevState, date: event.target.value };
    });
};
const saveExpense = (event) => {
  event.preventDefault();
  const expenseData = {...expense, date: new Date(expense.date)};
  props.onExpenseSave(expenseData);
  setExpense({
    title: '',
    amount: '',
    date: '',
  })
}

return (
    <form onSubmit={saveExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={onTitleChange} value={expense.title || ''}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={onAmountChange}
            value={expense.amount||''}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={onDateChange}
            value={expense.date||''}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
