import React, { Component } from 'react';
//import FirstComponent, {SecondComponent} from './components/learning-examples/FirstComponent';
//import ThirdComponent from './components/learning-examples/ThirdComponent';
import TodoApp from './components/todo/TodoApp'
import './App.css';
import './bootstrap.css'

//App is parent component, FirstComponent is child component
class App extends Component {
  render() {
    return (
      //JSX: extension of JS
      <div className="App">
        {/*<Counter/>*/}
        <TodoApp/>
      </div>
    );
  }
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       //JSX: extension of JS
//       <div className="learningComponents">
//          My Hello World
//          <FirstComponent></FirstComponent>
//          <SecondComponent></SecondComponent>
//          <ThirdComponent></ThirdComponent>
//          <FourthComponent></FourthComponent>
//       </div>
//     );
//   }
// }

function FourthComponent(){
  return (
    <div className="fourthComponent">
      Fourth Component
    </div>
  );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
