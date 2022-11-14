import './ExpensesFilter.css'
import ExpenseData from '../../ExpenseData'

const ExpensesFilter = props => {
  const onYearFilterUpdate = event => {
    props.onYearUpdate(event.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={onYearFilterUpdate}>
          <option value=''>Select</option>
          { ExpenseData.filterYear.map(year => 
            <option key={year} value={year}>{year}</option>) }
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter;