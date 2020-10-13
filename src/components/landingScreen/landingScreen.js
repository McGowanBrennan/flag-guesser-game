import React from "react"
import "./landingScreen.css"
import data from "../../data/CountryCodes.json"
import Game from "../game/Game.js"

class landingScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            beginGame: false,
            data : data,
            flags: []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    
        handleClick(){
            console.log(this.state.data)
            var res = data.sort(function() {
            return 0.5 - Math.random();
            });
            
            let flags = res.slice(data,40)
            console.log(flags)
            this.setState({
                flags: flags,
                beginGame: true
            })
        }

    render(){

        if(this.state.beginGame){
            return(
                <Game flags={this.state.flags}/>
            )
        }
        return(
            <div>
                <div className = "titleCard">
                    <h1>Flag Guesser</h1>
                    
                </div>
            
                <div class="wrapper">
                    <a onClick={this.handleClick} class="btn">start game</a>
                </div>
            </div>
        )
    }
}

export default landingScreen