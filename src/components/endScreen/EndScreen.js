import React from "react"
import "./endsreen.css"
import LandingScreen from "../landingScreen/landingScreen"

class EndScreen extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            restart: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            restart:true
        })
    }

    render(){

        if(this.state.restart){
            return(
            <LandingScreen/>
            )
        }

        return(
            <div>
            <div>
            <h1>Game Over</h1>
            <h3>Score: {this.props.score}</h3>
            <h3>Time: {this.props.finalTime}</h3>
            </div>
                <a onClick={this.handleClick} id="10"class="btn">Play again!</a>
            </div>
        )
    }


}

export default EndScreen