import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import Ouput from './Output';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      textValue: 'this is the text value in state'
    };
  }

  render(){
    return (
      <div className= 'App'>
        <Input inputText= {this.state.textValue} onChange= {this._updateText}/>
        <Ouput outputText= {this.state.textValue} onChange= {this._updateText}/>
      </div>
    )
  };

  _updateText= (event)=>{
    this.setState({
      textValue: event.target.value
    })
  }

}


export default App;
