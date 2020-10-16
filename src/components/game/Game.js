import React from "react"
import "./game.css"
import EndScreen from "../endScreen/EndScreen"
import {ProgressBar} from 'react-bootstrap'


/*
<div className="bar">
                    <ProgressBar now = {this.state.progress} style={{width: "100vh"}} striped="true"/>
                </div>
                
                <div className = "score">
                    
                <h3>{this.state.score}</h3>
                <h2>{this.state.currQuestion} / {this.state.numQuestions}</h2>
                <h4>{this.formatTime(this.state.runningTime)}</h4>
                </div>
            
                <div>
                {this.state.display[0]}
                </div>
                */

class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            flags: this.props.flags,
            score: 0,
            display: [],
            runningTime: 0,
            isRunning: false,
            final: 0,
            componentDidMountActivated: false,
            numQuestions: this.props.totalQuestions,
            currQuestion: 1,
            progress: 1
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleStartStopClick = this.handleStartStopClick.bind(this)
        this.formatTime = this.formatTime.bind(this)
       
        
    }

   

    handleClick(e){
        let currQuestion = this.state.currQuestion
        
        let percentComplete = (currQuestion/this.state.numQuestions) * 100
        this.setState({
            currQuestion: currQuestion + 1,
            progress: percentComplete
        })
        console.log(e.target.id)
        if(e.target.id==="correct"){
            let currScore = this.state.score
            this.setState({
                score: currScore + 1,
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
        if(this.state.display.length===0){
            this.handleStartStopClick()
        }
    }

    componentDidMount(){
        if(this.state.isRunning === false){
            if(this.state.componentDidMountActivated === false){
                this.handleStartStopClick()
                this.setState({
                    componentDidMountActivated: true
                })
            }
        }
        var i;
        let questionsList = []
        if(this.state.componentDidMountActivated === false){
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
                    <div class="container2">
                            <div class="flag"><img src={url} width="256" height="192"/></div>
                            <div class="button1"><button onClick={this.handleClick} id="correct" >{this.state.flags[i].name}</button></div>
                            <div class="button2"><button onClick={this.handleClick} id="wrong" >{this.state.flags[i+1].name}</button></div>
                            <div class="button3"><button onClick={this.handleClick} id="wrong" >{this.state.flags[i+2].name}</button></div>
                            <div class="button4"><button onClick={this.handleClick} id="wrong" >{this.state.flags[i+3].name}</button></div>
                    </div> 
                )
            }
            if(decider===1){
                questionsList.push(

                    <div class="container2">
                            <div class="flag"><img src={url} width="256" height="192"/></div>
                            <div class="button1"><button onClick={this.handleClick} id="wrong" >{this.state.flags[i+1].name}</button></div>
                            <div class="button2"><button onClick={this.handleClick} id="correct" >{this.state.flags[i].name}</button></div>
                            <div class="button3"><button onClick={this.handleClick} id="wrong" >{this.state.flags[i+2].name}</button></div>
                            <div class="button4"><button onClick={this.handleClick} id="wrong" >{this.state.flags[i+3].name}</button></div>
                    </div> 

                )
            }
            if(decider===2){
                questionsList.push(
                    <div class="container2">
                            <div class="flag"><img src={url} width="256" height="192"/></div>
                            <div class="button1"><button onClick={this.handleClick} id="wrong" >{this.state.flags[i+2].name}</button></div>
                            <div class="button2"><button onClick={this.handleClick} id="wrong" >{this.state.flags[i+1].name}</button></div>
                            <div class="button3"><button onClick={this.handleClick} id="correct" >{this.state.flags[i].name}</button></div>
                            <div class="button4"><button onClick={this.handleClick} id="wrong" >{this.state.flags[i+3].name}</button></div>
                    </div> 
                )
                }
            if(decider===3){
                questionsList.push(
                    <div class="container2">
                            <div class="flag"><img src={url} width="256" height="192"/></div>
                            <div class="button1"><button onClick={this.handleClick} id="wrong" >{this.state.flags[i+3].name}</button></div>
                            <div class="button2"><button onClick={this.handleClick} id="wrong" >{this.state.flags[i+1].name}</button></div>
                            <div class="button3"><button onClick={this.handleClick} id="wrong" >{this.state.flags[i+2].name}</button></div>
                            <div class="button4"><button onClick={this.handleClick} id="correct" >{this.state.flags[i].name}</button></div>
                    </div> 
                )
                }
            
        }
        this.setState({
            display: questionsList
        })
    }
        

    }

    handleStartStopClick = () => {
        if (this.state.isRunning) {
          clearInterval(this.timerID);
          this.setState({ isRunning: false });
        } else {
          const startTime = Date.now() - this.state.runningTime;
          this.timerID = setInterval(() => {
            this.setState({ runningTime: Date.now() - startTime , isRunning: true});
          }, 100);
        }
      }

      formatTime(t) {
        return (t / 1000).toFixed(1);
      }

    componentWillUnmount(){
        this.setState({
            final: this.state.seconds
        })
    }

    render(){
        let styles = {
            width: 100
        }
        if(this.state.display.length===0){
            return(
            <EndScreen score={this.state.score} finalTime = {this.formatTime(this.state.runningTime)}/>
            )
        }

        return(
            
                
                
                <div class="container">
            <div class="score">{this.state.score}</div>
            <div class="bar"><ProgressBar now = {this.state.progress} striped="true"/></div>
            <div class="timer">{this.formatTime(this.state.runningTime)}</div>
            <div class="game">{this.state.display[0]}</div>
            
                 </div>

            
        )
    }
}

export default Game