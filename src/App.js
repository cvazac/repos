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
    axios.get('https://api.github.com/repositories')
    .then((response) => {
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

    return (
      <div>
        <pre>
          {JSON.stringify(firstRepo, null, 2)}
        </pre>
      </div>
    )
  }
}
