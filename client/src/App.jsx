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
      category: ''
    }

    this.showImage = this.showImage.bind(this)

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
    this.setState({
      category: "bag"
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
    //var randomItems = _.shuffle(this.state.show).splice(0, 6)
    return (
      <div>
        <Media queries={{ small: { maxWidth: 950 }, smaller: {maxWidth: 700} }}>
        {matches =>
          matches.small ? (
            <div>
              <h2 className="title">People also viewed</h2>
              <div className="scroll">
                <Items items={randomItems.slice(0, 4)} class={"largerImage"}/>
              </div>
            </div>
            ) : (
            <div>
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






  // class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       show: [],
//       previous: [],
//       page: 0
//     }

//     this.showImage = this.showImage.bind(this)
//     this.incrementPage = this.incrementPage.bind(this)
//     this.decrementPage = this.decrementPage.bind(this)
//   }

//   showImage() {
//     axios.get('/products')
//       .then(result => {
//         this.setState({
//           show: result.data
//         })
//       }, console.log(this.state))
//       .catch(err => console.log(err))
//   }

//   componentDidMount() {
//     this.showImage()
//   }

//   incrementPage(items) {
//     this.setState({
//       page: this.state.page + 1,
//       previous: items
//     })
//   }

//   decrementPage() {
//     this.setState({
//       page: this.state.page - 2
//     })
//   }



//   render() {
//     var randomItems = _.shuffle(this.state.show).splice(0, 5)

//     return (
//       <div>
//         <h2 className="title">People also viewed</h2>

//         <div className="scroll">
//           {(this.state.show.length === 0) ?   (<div></div>) : (
//             <div className="contents">
//               <Items items={randomItems}/>
//               <button onClick={() =>   this.incrementPage  (randomItems)}>test this</  button>
//             </div>
//           )}
//         </div>

//       </div>
//     )
//   }
// }

// export default App



  // if (this.state.page === 1) {
  //   return (
  //     <div>
  //       <Items items={randomItems}/>
  //       <button onClick={() => this.incrementPage(this.state.previous)}>Go Back</button>
  //     </div>
  //   )
  // }

  // if (this.state.page === 2) {
  //   return (
  //     <div>
  //       <Items items={this.state.previous}/>
  //       <button onClick={() => this.decrementPage()}>New</button>
  //     </div>
  //   )
  // }