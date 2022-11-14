import './ChartBar.css'

const ChartBar = props => {

  let chartBarHeight = '0%'
  // console.log(props.maxValue)
  if(props.maxValue > 0) {
    chartBarHeight = ((props.value / props.maxValue) * 100) + '%' 
    // console.log(chartBarHeight)
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className="chart-bar__fill" style={{height: chartBarHeight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  )
}

export default ChartBar;