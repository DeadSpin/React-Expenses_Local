import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = props => {
  /** This approch use single useState function but 
    *  you need to overwrite previous state
    */
  const inputField = {
    title : '',
    amount : '',
    date : ''
  }

  const [userInput, setUserInput] = useState(inputField)

  const inputChangeHandler = (event) => {
    setUserInput(prevState => {
      return {
        ...prevState,
        [event.target.name] : event.target.value
      }
    })
  }

  /* END */

  /**
   * We can also use multiple state for each input field there will be a state
  
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler (event) => { setEnteredTitle(event.target.value) }
  const amountChangeHandler (event) => { setEnteredAmount(event.target.value) }
  const dateChangeHandler (event) => { setEnteredDate(event.target.value) }
  
  END */

  const onSubmitHandler = event => {
    event.preventDefault()
    const check = Object.values(userInput).every(value => !!value)
    if(!check)
      return

    if(userInput.date)
      userInput.date = new Date(userInput.date)

    /**
     * calling parent component function by using props as function pointer passes from parent
     */
    props.onAddExpenses(userInput)
    setUserInput(inputField)
    props.closeNewExpense(false)
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' name='title' value={userInput.title} onChange={inputChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' name='amount' value={userInput.amount} onChange={inputChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2022-01-01' max='2026-12-31' name='date' value={userInput.date} onChange={inputChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={() => props.closeNewExpense(false)}>Close</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;