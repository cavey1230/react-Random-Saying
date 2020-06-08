import React,{ Component } from "react"
import  "./App.css"
import { Button} from 'react-bootstrap';

class  App extends  Component{
    constructor(props) {
        super(props);
        this.state={
            countadd:0,
            colors:["#222831","#393e46","#00adb5","#eeeeee"]
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
       this.setState((this.state.countadd<this.props.messages.list.length-1)?{countadd: this.state.countadd+1}:{countadd:0})
    }
    render() {
        const changeBGcolor = {backgroundColor:this.state.colors[this.state.countadd]};
        const changecolor = {color:this.state.colors[this.state.countadd]};
        return(
            <div className="backg" style={changeBGcolor}>
                <div id="quote-box">
                    <div id="text" style={changecolor}>
                        <p>{this.props.messages.list[this.state.countadd].text}</p>
                    </div>
                    <div id="author" style={changecolor} >
                        <p>--{this.props.messages.list[this.state.countadd].ather}</p>
                    </div>
                    <input value={this.props.messages.list[this.state.countadd].text} />
                        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">推特</a>
                        <Button bsStyle="primary" id="new-quote" onClick={this.handleClick}>新的</Button>
                </div>
            </div>
        )
    }
}


export default App;
