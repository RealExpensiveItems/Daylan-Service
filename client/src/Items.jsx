import React from 'react'
import Item from './item.jsx'
import _ from 'underscore'

var Items = (props) => {

  return (
    <div className="container">
      {props.items.map((itemObj) => (
          <Item
          item={itemObj}
          />
        )
      )}
    </div>
  )
}


export default Items