import './Card.css'

const Card = (props) => {
  /*  
    Call it as Composition and Wrapper Component
    props.className get all the classes uses in Card component 
    props.children(built in) attribute get all the data/html inside Card tag
  */

  const classes = 'card ' + props.className

  return (
    <div className={classes}> {props.children} </div>
  )
}

export default Card;