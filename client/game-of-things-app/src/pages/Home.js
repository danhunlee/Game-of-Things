import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            roomCode: ''
        }
    }

    componentDidMount() {
        console.log('in home')
        fetch('room', {
            method: 'POST'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        roomCode: result.room_code
                    })
                    console.log('result', result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    componentUnMount() {
    }

    render() {
        const { roomCode } = this.state

        return(
            <div className="HomePage" style={{ display: 'flex', flexDirection: 'column' }}>
                <div>Home Page</div>
                <div>This is your room code: {roomCode}</div>
            </div>
        );
    }
}

export default Home;