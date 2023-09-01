import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {
    //define the initial state in a constructor
    //state => counter 0
    constructor() {
        super(); //error 1: you need to add super() before you call state
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);

    }
    increment (by) { //update state - counter++
        //console.log(`increment from child - ${by}`); //ticks
        this.setState(
            (prevState) => {
             return {counter: prevState.counter + by}
            }
        );
    }

    decrement (by) { //update state - counter++
        //console.log(`decrement from child - ${by}`); //ticks
        this.setState(
            (prevState) => {
             return {counter: prevState.counter - by}
            }
        );
    }

    reset(){
        this.setState({counter: 0});
    }

    render() {
        return (
          //JSX: extension of JS
          <div className="Counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <span className = "count">{this.state.counter}</span>
            <div><button className = "reset" onClick={this.reset}>Reset</button></div>
          </div>
        );
    }

}
//class component
class CounterButton extends Component {
    //define the initial state in a constructor
    //state => counter 0
    //constructor() {
    //    super(); //error 1: you need to add super() before you call state
        // this.state = {
        //     counter : 0
        // }
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    //}

    render () {
        //const style = {fontSize : "50px", padding: "15px 30px"}
        return (
            <div className="counter">
               <button onClick={() => this.props.incrementMethod(this.props.by)} >+{this.props.by}</button>
               <button onClick={() => this.props.decrementMethod(this.props.by)} >-{this.props.by}</button>
               {/*<span className = "count">{this.state.counter}</span>*/}
            </div>
          );

    }
// //一定要小心，一个字母的大小写，一个逗号，一个分号，以及大括号的位置都会影响结果
//     decrement () { //update state - counter++
//         //console.log('increment from parent');
//         this.setState({
//             counter: this.state.counter - this.props.by
//         });
//         this.props.decrementMethod(this.props.by);
//     }

//     increment () { //update state - counter++
//         //console.log('increment from parent');
//         this.setState({
//             counter: this.state.counter + this.props.by
//         });
//         this.props.incrementMethod(this.props.by);
//     }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}
export default Counter