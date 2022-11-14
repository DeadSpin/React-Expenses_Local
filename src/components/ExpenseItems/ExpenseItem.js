import './ExpenseItem.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate item={props.item} />
      <div className='expense-item__description'>
        <h2> {props.item.title} </h2>
        <div className='expense-item__price'>${props.item.amount} </div>
      </div>
    </Card>
  )
}

export default ExpenseItem;