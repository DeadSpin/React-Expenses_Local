import ExpenseItem from '../../ExpenseItems/ExpenseItem';
import './ExpenseFilteredData.css' 

const ExpenseFilteredData = props => {
  if (props.filteredItems.length === 0) {
    return (
      <h2 className='expenses-list__fallback'> No expense found!!!</h2>
    )
  }

  return (
    props.filteredItems.map(item =>
      <ExpenseItem key={item.id} item={item} />
    )
  )
}

export default ExpenseFilteredData;