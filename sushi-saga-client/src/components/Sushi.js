import React, { Fragment } from 'react'

const Sushi = (props) => {
  let { id, name, price, img_url, eat } = props;

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={props.eaten != null}>
        {/* Working on ternary operator for the below: */}
        { if (props.eaten != null ) ? "Available" : "Eaten" } 
      </div>

      <div>
          {/* h4 below not in demo */}
          <h4 className="sushi-details">Get to Know Your Sushi</h4>
          <div>Name: {props.name}</div>
          <div>Price: {props.price}</div>
      </div>  
          
    </div>
  )
}

export default Sushi



// 