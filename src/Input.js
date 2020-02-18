import React from 'react';

function Input (props){
    console.log(props.inputText)
    return ( 
        <div>
            <h1>Type Here</h1>
            <input>
            </input>
        </div>
        
    );
}

// class Input extends React.Component{
//     constructor(props){
//         super(props);
//         this.state= {
//             textValue: ''
//         };
//     }
//     render (){
//         return(
//         <div>
//             <input  
//             value = {props.textValue}>
//             </input>
//             <label>
//                 Type Here!
//             </label>
//             <input onChange= {this._updateText}>
//             {props._updateText}
//             </input>
//         </div>
//         );
//     }

export default Input;