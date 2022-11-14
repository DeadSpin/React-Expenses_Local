import React, { useState } from 'react';
import './Expenses.css'
import Card from '../Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpenseFilteredData from '../ExpensesFilter/ExpenseFilteredData/ExpenseFilteredData';
import Chart from '../Chart/Chart';

function Expenses(props) {

  let items = props.items
  const [filterYear, setFilterYear] = useState('')

  const onYearChange = year => setFilterYear(year)

  if (filterYear)
    items = props.items.filter(item => item.date.getFullYear().toString() === filterYear)
  else
    items = props.items


  
  /**
   * We can also store HTML data in the variable for the conditional HTML 
   
  let expenseData = <p>No expense data found!!!</p>
  if(items.length > 0) {
    expenseData = items.map(item =>
      <ExpenseItem key={item.id} item={item} />
    )
  }
  */
  return (
    <Card className='expenses'>
      <Chart filteredData={items} />
      <ExpensesFilter selectedYear={filterYear} onYearUpdate={onYearChange} />
      <ExpenseFilteredData filteredItems={items} />
      
      {/**
       * Append conditional HTML syntax
      expenseData
      */}

      {/**
       * We can use conditional statement in JSX by using ternary operator OR
      {items.lenght === 0 ? (<p>No Data Found!!!</p>) : (
        items.map(item =>
          <ExpenseItem key={item.id} item={item} />
        )
      )} 
      */}

      {/**
       *We can also use JS abuse method to use conditional statement
       * && means if true then return
       *
      {items.lenght === 0 && (<p>No Data Found!!!</p>)}
      {items.lenght > 0 && (
        items.map(item =>
          <ExpenseItem key={item.id} item={item} />
        )
      )}
      */}

      {/**
       * Unconditional statement
      items.map(item =>
        <ExpenseItem key={item.id} item={item} />
      )
      */}

      {/**
      <ExpenseItem item={props.items[0]} />
      <ExpenseItem item={props.items[1]} />
      <ExpenseItem item={props.items[2]} />
      <ExpenseItem item={props.items[3]} /> 
      */}

    </Card>
  )
}

export default Expenses;