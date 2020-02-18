import React from 'react';

function Output(props){
    console.log(props.outputText)
    return (
        <div>{props.outputText}
        </div>
    );
}

export default Output;