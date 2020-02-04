import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import Ouput from './Output';


class App extends React.Component {
  constructor(props){
    super(props)
  }
  
  
  render(){
    return (
      <div className= 'App'>
        <Input />
        <Ouput />
      </div>
    )
  }

}


export default App;
