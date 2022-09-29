import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseHandler = (expenseData) => {
        const expense = {
            ...expenseData,
            id: Math.random().toString(),
        }
        props.onSaveExpense(expense);
    }

    return <div className='new-expense'>
        <ExpenseForm onExpenseSave={saveExpenseHandler} />
    </div>
}

export default NewExpense;