import React from 'react'
import reactDOM from 'react-dom'
import axios from 'axios'
import Media from 'react-media'

class Gritty extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      current: ''
    }
  }

  render() {
    return (
      // <div>
      //   <h2 className="gritty">The nitty gritty</h2>
      //   <div className="list">
      //     <h4 className="features">Features</h4>
      //     <li>
      //     Developed by REI Co-op, Peak 2.5-layer recycled ripstop nylon shell shields you from rain and wind to 60+ MPH, while staying breathable and dry on the inside
      //     </li>
      //     <li>
      //     Sealed seams ensure full waterproof protection; a durable water repellent (DWR)finish sheds light rain
      //     </li>

      //     <li>
      //     Jacket is windproof to 60 mph
      //     </li>

      //     <li>
      //     Pit zips let you dump excess heat as the day warms up or your exertion level rises
      //     </li>

      //   </div>
      //   <div className="specs">
      //     <h4 >next column</h4>
      //     <li>
      //       will this work
      //     </li>
      //   </div>
      // </div>

      <div>
        <Media queries={{ small: { maxWidth: 599 } }}>
          {matches =>
            matches.small ? (
              <p>This is SMALL!</p>
            ) : (
              <p>This is large!!</p>
            )
          }
        </Media>


      </div>
    )
  }
}

export default Gritty