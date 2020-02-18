import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import Ouput from './Output';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      textValue: 'This is the text value in state'
    };
  }
  
  
  render(){
    return (
      <div className= 'App'>
        <form onSubmit= {this._handleSubmit}>
        {/* <input
          onChange= {this._updateText}
          value={this.state.textValue}
          /> */}
        <Input inputText= {this.state.textValue} />
        <button onClick = {this._updateText}>Click to sumbit input!</button>
        <Ouput outputText= {this.state.textValue}
        value= {this.state._updateText}
        />
        </form>
      </div>
    )
  };

  _updateText= ({event})=>{
    console.log(event.target.value)
    this.setState({
      textValue: event.target.textValue
    })
  }

}


export default App;
