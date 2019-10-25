import React from 'react'
import stars from './stars/0.png'
import Reviews from './Reviews.jsx'



var Item = (props) => {
  return (

    <div className="items">

      <main>
      <figure>
      <img className={props.class} src={props.item.image}/>
      </figure>

      </main>

      <span className="full-product">
        <Reviews rating={props.item.rating} reviewers={props.item.reviewers}/>
      </span>

    <div className="fullName">
      <span className="name">
      {props.item.name}
      </span>
      <span className="description">
      {props.item.description}
      </span>
    </div>

      <span className="price">
        ${props.item.price}.00
      </span>

    </div>

  )
}

export default Item