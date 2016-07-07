import React, { Component } from 'react'
import axios from 'axios'

export default class Repos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    axios.get('https://api.github.com/repositories').then((response) => {
      const {data} = response
      this.setState({
        data,
      })
    })
  }

  render () {
    const {data} = this.state
    const firstRepo = data[0]
    if (!firstRepo) {
      return <div>Loading...</div>
    }

    const {id, name, description} = firstRepo
    return (
      <div>
        <div>id: {id}</div>
        <div>name: {name}</div>
        <div>description: {description}</div>
        <br/>
        <pre>
          {JSON.stringify(firstRepo, null, 2)}
        </pre>
      </div>
    )
  }
}
