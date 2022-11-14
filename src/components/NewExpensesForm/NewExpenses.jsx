import './NewExpenses.css'
import ExpenseForm from './ExpenseForm/ExpenseForm';
import { useState } from 'react';

const NewExpenses = props => {

  const [addNew, setAddNew] = useState(false)
  const saveExpensesData = expenseData => {
    const newExpense = {
      ...expenseData,
      id : Math.random().toString()
    }

    props.onAddNewExpenseData(newExpense)
  }

  const onClickNewExpense = (flag) => {
    setAddNew(flag)
  }

  return (
    <div className='new-expense'>
      {!addNew && <button onClick={() => onClickNewExpense(true)} value={true}>Add New Expense</button>}
      {addNew && <ExpenseForm onAddExpenses={saveExpensesData} closeNewExpense={onClickNewExpense}/>}
    </div>
  )
}

export default NewExpenses;