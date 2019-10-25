import React from 'react'
import noStars from './stars/0.png'
import halfStars from './stars/2.png'
import fullStars from './stars/4.png'
import _ from 'underscore'

var Reviews = (props) => {
  var arr = [noStars, noStars, noStars, noStars, noStars];
  var halfRating = props.rating

  for (var i = 0; i < props.rating - .5; i++) {
    arr[i] = fullStars
    halfRating -= 1
    if (halfRating === .5) {
      arr[i + 1] = halfStars
    }
  }

  return (
    <span className="full-product">
      <img className="stars" src={arr[0]} />
      <img className="stars" src={arr[1]} />
      <img className="stars" src={arr[2]} />
      <img className="stars" src={arr[3]} />
      <img className="stars" src={arr[4]} />
      <span className="reviews">({props.reviewers})</span>
    </span>
  )
}

export default Reviews