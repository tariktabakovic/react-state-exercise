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
        <Input inputText= {this.state.textValue} />
        <Ouput ouputText= {this.state.textValue}/>
      </div>
    )
  };

  _updateText= ()=>{
    this.setState({
      textValue: this.state.textValue
    })
  }

}


export default App;
