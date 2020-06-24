import React from 'react';
import './App.css';
import Input from './Input';
import Output from './Output';
import ClearInput from './ClearInput';
import UpperCaseOutput from './UpperCaseOutput';

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
        <Output outputText= {this.state.textValue} onChange= {this._updateText}/>
        <ClearInput onClick= {this._eraseText}/>
        <UpperCaseOutput upperCase= {this.state.textValue}/>
      </div>
    )
  };

  _updateText= (event)=>{
    this.setState({
      textValue: event.target.value
    })
  }

  _eraseText= (event) =>{
    this.setState({
      textValue: ""
    })
  }

}


export default App;
