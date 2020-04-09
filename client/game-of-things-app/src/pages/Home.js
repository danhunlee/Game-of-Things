import React, { Component } from 'react'
import Button from '@material-ui'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentDidMount() {
        console.log('in home')

    }

    componentUnMount() {
    }

    render() {
        const { roomCode } = this.props

        return(
            <div class="HomePage" style={{ display: 'flex', flexDirection: 'column' }}>
                <div>Home Page</div>
                <div>This is your room code: {roomCode}</div>
            </div>
        );
    }
}

export default Home;