import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'React'
      }
      this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`Hello ${this.state.message} from ${childName}`)
    }
  render() {
    return (
      <div>
          <Child greetHandler = {this.greetParent}/>
      </div>
    )
  }
}

export default Parent