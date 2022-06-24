import React, { Component, useState } from 'react'

class ApiFetch extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: [],
            DataisLoaded : false
        }
    }
    componentDidMount() {
        fetch(
"https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const [DataisLoaded, items] = this.state
        if(!DataisLoaded)
            return <h1>Please wait for some time....</h1>
        return (
            <div>
                {
                items.map((item) => (
                    <ol key={item.id}>
                        User Name: {item.username},
                        Full Name: {item.name},
                        Email: {item.email}
                    </ol>
                ))
                }        
            </div>
        )
  }
}

export default ApiFetch