import './Chart.css'
import ExpenseData from '../../ExpenseData'
import ChartBar from './ChartBar/ChartBar'

const Chart = props => {

  let chartData = [...ExpenseData.chartData]
  chartData = chartData.map(chart => ({...chart, value: 0}))

  for(const item of props.filteredData) {
    const month = item.date.getMonth()
    chartData[month].value += item.amount
  }

  const amount = props.filteredData.map(expense => expense.amount)
  const maxAmount = Math.max(...amount)

  return (
    <div className='chart'>
      {chartData.map(data =>
        <ChartBar key={data.label} maxValue={maxAmount} value={data.value} label={data.label} />
      )}
    </div>
  )
}

export default Chart;