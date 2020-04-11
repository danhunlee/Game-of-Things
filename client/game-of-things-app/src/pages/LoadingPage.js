import React, { Component } from 'react'

class LoadingPage extends Component{
  constructor(props){
    super(props)
    this.state={
      players: [],
    };
  }
  

  componentDidMount() {
    console.log('in loading')
    this.setState({
      players: [
        {
          name: 'Jennifer',
          color: 'pink',
        },
        {
          name: 'Mark',
          color: 'blue',
        }
      ]
    })
    
  }

  componentUnMount() {

  }

  render() {
      const { roomCode } = this.props

      return(
          <div class="LoadingPage">
              <div>Loading Page</div>
              <div>This is your room code: {roomCode}</div>
              <ul>
                {this.state.players.map(p => <li>{p.name} - {p.color}</li>)}
              </ul>
          </div>
      )
  }
}
export default LoadingPage;