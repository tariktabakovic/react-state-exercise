import React from 'react';

function Input ({inputText, onChange}){
    console.log({inputText})
    return ( 
        <>
            <label>Type Here</label>
            <input type="text" value={inputText} onChange={onChange}></input>
        </>
        
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