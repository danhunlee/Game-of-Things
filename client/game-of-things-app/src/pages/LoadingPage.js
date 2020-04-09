import React, { Component } from 'react'

class Loading extends Component{
  constructor(props){
    super(props)
    this.state={
      player1: {
          name: 'Jennifer',
          color: 'pink',
      },
      player2: {
          name: 'Mark',
          color: 'blue',
      },
    };
  }
  

  componentDidMount() {
      console.log('in loading')
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
                {this.state.players.name}
              </ul>
          </div>
      )
  }
}
export default Loading;