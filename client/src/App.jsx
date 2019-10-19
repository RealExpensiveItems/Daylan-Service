import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
import Items from './Items.jsx'
import Item from './Item.jsx'
import _ from 'underscore'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: [],
      previous: [],
      page: 0
    }

    this.showImage = this.showImage.bind(this)
    this.incrementPage = this.incrementPage.bind(this)
    this.decrementPage = this.decrementPage.bind(this)
  }

  showImage() {
    axios.get('/products')
      .then(result => {
        this.setState({
          show: result.data
        })
      }, console.log(this.state))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.showImage()
  }

  incrementPage(items) {
    this.setState({
      page: this.state.page + 1,
      previous: items
    })
  }

  decrementPage() {
    this.setState({
      page: this.state.page - 2
    })
  }



  render() {
    var randomItems = _.shuffle(this.state.show).splice(0, 5)

    if (this.state.page === 1) {
      return (
        <div>
          <Items items={randomItems}/>
          <button onClick={() => this.incrementPage(this.state.previous)}>Go Back</button>
        </div>
      )
    }

    if (this.state.page === 2) {
      return (
        <div>
          <Items items={this.state.previous}/>
          <button onClick={() => this.decrementPage()}>New</button>
        </div>
      )
    }

    return (
      <div>
        {(this.state.show.length === 0) ? (<div></div>) : (
          <div>
            <h2 className="title">People also viewed</h2>
            <Items items={randomItems}/>
            <button onClick={() => this.incrementPage(randomItems)}>test this</button>
          </div>
        )}
      </div>
    )
  }
}

export default App