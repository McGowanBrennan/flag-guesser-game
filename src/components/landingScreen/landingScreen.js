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
            flags: [],
            questions: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    
        handleClick(e){
            let numSlices = e.target.id
            console.log(this.state.data)
            var res = data.sort(function() {
            return 0.5 - Math.random();
            });
            
            let flags = res.slice(data,(numSlices*4))
            console.log(flags)
            this.setState({
                flags: flags,
                beginGame: true,
                questions: numSlices
            })
        }

    render(){

        if(this.state.beginGame){
            return(
                <Game flags={this.state.flags} totalQuestions={this.state.questions}/>
            )
        }
        return(
            <div>
                <div className = "titleCard">
                    <h1>Flag Guesser</h1>
                    
                </div>
            
                <div class="wrapper">
                    <a onClick={this.handleClick} id="10"class="btn">10 flags</a>
                    <a onClick={this.handleClick} id="20"class="btn">20 flags</a>
                    <a onClick={this.handleClick} id="50"class="btn">50 flags</a>
                </div>
            </div>
        )
    }
}

export default landingScreen