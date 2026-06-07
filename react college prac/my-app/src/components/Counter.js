import React, {Component} from 'react';

class Counter extends Component{
    constructor(){
        super();

        this.state = {
            count:0,
            name:"light mode"
        };
    }

    increment = () => {
        this.setState({
            count:this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    reset = () => {
        this.setState({
            count: 0,
            name: "light mode"

        });
    }

    changeName = () => {
        this.setState({
            name: this.state.name === "light mode" ? "dark mode" : "light mode"
        });
    }

    render(){
        return(
            <>
                <div>count: {this.state.count}</div>
                <div>name: {this.state.name}</div>
                <button onClick={this.changeName}>change mode</button>
                <button onClick = {this.increment}>increment</button>
                <button onClick = {this.decrement}>decrement</button>
                <button onClick = {this.reset}>reset</button>
            </>
        );
    }
}
export default Counter;