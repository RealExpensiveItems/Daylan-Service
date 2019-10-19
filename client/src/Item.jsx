import React from 'react'
import stars from './stars/0.png'
import Reviews from './Reviews.jsx'



var Item = (props) => {
  return (

    <div className="items">

      <figure>
      <img className="image" src={props.item.image}/>
      </figure>


      <span>
        <Reviews rating={props.item.rating} reviewers={props.item.reviewers}/>
      </span>

      <span className="name">
      {props.item.name}
      </span>

      <span className="description">
      {props.item.description}
      </span>

      <span className="price">
        ${props.item.price}.00
      </span>
    </div>

  )
}

export default Item