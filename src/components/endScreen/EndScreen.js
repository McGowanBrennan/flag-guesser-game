import React from "react"

class EndScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
            <h1>Game Over</h1>
            <h3>Score: {this.props.score}</h3>
            <h3>Time: {this.props.finalTime}</h3>
            </div>
        )
    }


}

export default EndScreen