import React, { useState } from 'react';
import './App.css'
import ExpenseData from './ExpenseData'
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpensesForm/NewExpenses';

/**
 * 
 * You can also define function as basic
 * function App() {} both are same just JS syntax change
 */

const App = () => {

  const [expenses, setExpenses] = useState(ExpenseData.expenses)
  const saveNewExpenseData = newExpense => {
    setExpenses(prevState => {
      return [ newExpense, ...prevState ]
    })
  }

  return (
    <div className="App">
      <NewExpenses onAddNewExpenseData={saveNewExpenseData} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App;
