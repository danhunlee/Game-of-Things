import React, { Component } from 'react'
import Button from '@material-ui/core/button/'
import TextField from '@material-ui/core/TextField/'


class Home extends Component {
    constructor(props) {
        super(props)
        console.log('App - Constructor');
    }

    componentDidMount() {
        console.log('App - Mounted')

    }

    componentUnMount() {
        console.log('Home - Unmount');
    }

    handleSend = product => {
        console.log(product);
        console.log('handle Sent', this);
    };

    handleChange = product => {
        console.log(product);
        console.log('handle Changed', this);
    };

    render() {
        console.log('App - rendered');
        const { roomCode } = this.props

        return(
            <div class="HomePage" style={{ display: 'flex', flexDirection: 'column' }}>
                {/* <div>Game of Things</div> */}
                {/* <div>This is your room code: {roomCode}</div> */}
                <div align="center">
                <TextField id="standard-basic" label="Room Code"  />
                <br></br><br></br>
                <Button 
                    onClick={() => this.handleSend(this.props)} 
                    variant="contained" color="primary">
                    Join Room
                </Button>
                <br></br><br></br>
                <Button 
                    onClick={() => this.handleChange(this.props)}
                    variant="contained" color="primary">
                    Create Room
                </Button>
                </div>
            </div>
        );
    }
}

export default Home;