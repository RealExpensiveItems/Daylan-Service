import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
import Items from './Items.jsx'
import Item from './Item.jsx'
import _ from 'underscore'
import Media from 'react-media'



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: [],
      category: '',
      relevant: [],
      ryan: []
    }

    this.showImage = this.showImage.bind(this)
    // this.getByProductId = this.getByProductId.bind(this)
    //this.getRyans = this.getRyans.bind(this)
  }

  showImage() {
    axios.get('http://localhost:3000/products')
      .then(result => {
        this.setState({
          show: result.data
        })
      }, console.log(this.state))
      .catch(err => console.log(err))
  }


  getByProductId(id) {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(result => {
        this.setState({
          relevant: result.data
        })
      }, console.log(this.state.relevant))
      .catch(err => console.log(err))
  }


  componentDidMount() {
    // this.getByProductId('jacket')
    this.showImage()
    this.setState({
      category: "jacket"
    })
  }


  render() {
    var item = []
    for (var i = 0; i < this.state.show.length; i++) {
      if (this.state.show[i].category === this.state.category) {
        item.push(this.state.show[i])
      }
    }

    var randomItems = _.shuffle(item).splice(0, 6)
    return (
      <div>
        <Media queries={{ small: { maxWidth: 950 }, smaller: {maxWidth: 700} }}>
        {matches =>
          matches.small ? (
            <div className="main-contain">
              <h2 className="title">People also viewed</h2>
              <div className="scroll">
                <Items items={randomItems.slice(0, 4)} class={"largerImage"}/>
              </div>
            </div>
            ) : (
            <div className="main-contain">
              <h2 className="title">People also viewed</h2>
              <Items items={randomItems} class={"image"}/>
            </div>
          )
        }
        </Media>
      </div>
    )
  }
}

export default App
