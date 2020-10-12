import React from "react"
import "./game.css"


class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            flags: this.props.flags,
            score: 0,
            display: []
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(e){
        console.log(e.target.id)
        if(e.target.id==="correct"){
            let currScore = this.state.score
            this.setState({
                score: currScore + 1
            })
            
            let oldDisplay = this.state.display
            oldDisplay.shift()
            this.setState({
                display: oldDisplay
            })
        }

        else{
            let oldDisplay = this.state.display
            oldDisplay.shift()
            this.setState({
                display: oldDisplay
            })
        }
    }

    componentDidMount(){
        var i;
        let questionsList = []
        for(i=0; i<this.state.flags.length; i+=4){
            let countryCode = this.state.flags[i].code
            countryCode = countryCode.toLowerCase();
            let url = "https://flagcdn.com/w320/"
            url = url + countryCode
            url = url + ".png"
            console.log(countryCode)
            let decider = Math.floor(Math.random() * 4)
            //Randomize button layout so the correct answer isnt always first
            if(decider===0){
                questionsList.push(
                    <div class="container">
                    <div class="row">
                        <div class="col-md-11"><img src={url} width="256"
                            height="192"/></div>
                        <div class="col-md-6"><div class="col"><button class="big-button" id="correct" onClick={this.handleClick}>{this.state.flags[i].name}</button></div></div>
                        <div class="col-md-6"><div class="col"><button class="big-button" id="wrong" onClick={this.handleClick}>{this.state.flags[i+1].name}</button></div></div>
                        <div class="col-md-6"><div class="col"><button class="big-button" id="wrong" onClick={this.handleClick}>{this.state.flags[i+2].name}</button></div></div>
                        <div class="col-md-6"><div class="col"><button class="big-button" id="wrong" onClick={this.handleClick}>{this.state.flags[i+3].name}</button></div></div>
                    </div>
                    <div class="row"></div>
                </div>
                )
            }
            if(decider===1){
                questionsList.push(

                    <div class="container">
                    <div class="row">
                        <div class="col-md-11"><img src={url} width="256"
                            height="192"/></div>
                        <div class="col-md-6"><div class="col"><button class="big-button" id="wrong" onClick={this.handleClick}>{this.state.flags[i+1].name}</button></div></div>
                        <div class="col-md-6"><div class="col"><button class="big-button" id="correct" onClick={this.handleClick}>{this.state.flags[i].name}</button></div></div>
                        <div class="col-md-6"><div class="col"><button class="big-button" id="wrong" onClick={this.handleClick}>{this.state.flags[i+2].name}</button></div></div>
                        <div class="col-md-6"><div class="col"><button class="big-button" id="wrong" onClick={this.handleClick}>{this.state.flags[i+3].name}</button></div></div>
                    </div>
                    <div class="row"></div>
                </div>

                )
            }
            if(decider===2){
                questionsList.push(
                    <div class="container">
                    <div class="row">
                        <div class="col-md-11"><img src={url} width="256"
                            height="192"/></div>
                        <div class="col-md-6"><div class="col"><button class="big-button" id="wrong" onClick={this.handleClick}>{this.state.flags[i+1].name}</button></div></div>
                        <div class="col-md-6"><div class="col"><button class="big-button" id="wrong" onClick={this.handleClick}>{this.state.flags[i+2].name}</button></div></div>
                        <div class="col-md-6"><div class="col"><button class="big-button" id="correct" onClick={this.handleClick}>{this.state.flags[i].name}</button></div></div>
                        <div class="col-md-6"><div class="col"><button class="big-button" id="wrong" onClick={this.handleClick}>{this.state.flags[i+3].name}</button></div></div>
                    </div>
                    <div class="row"></div>
                </div>
                )
                }
            if(decider===3){
                questionsList.push(
                    <div class="container">
                    <div class="row">
                        <div class="col-md-11"><img src={url} width="256"
                            height="192"/></div>
                        <div class="col-md-6"><div class="col"><button class="big-button" id="wrong" onClick={this.handleClick}>{this.state.flags[i+1].name}</button></div></div>
                        <div class="col-md-6"><div class="col"><button class="big-button" id="wrong" onClick={this.handleClick}>{this.state.flags[i+3].name}</button></div></div>
                        <div class="col-md-6"><div class="col"><button class="big-button" id="wrong" onClick={this.handleClick}>{this.state.flags[i+2].name}</button></div></div>
                        <div class="col-md-6"><div class="col"><button class="big-button" id="correct" onClick={this.handleClick}>{this.state.flags[i].name}</button></div></div>
                    </div>
                    <div class="row"></div>
                </div>
                )
                }
        }

        this.setState({
            display: questionsList
        })


    }

    render(){
        console.log(this.state.display)
        return(
            <div>
                <div>
                {this.state.display[0]}
                </div>
                <div className = "score">
                <h3>{this.state.score}</h3>
                </div>
            </div>
        )
    }
}

export default Game