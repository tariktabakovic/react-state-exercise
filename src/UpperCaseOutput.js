import React from 'react';

function UpperCaseOutput({upperCase}){

    var upperCaseText= upperCase.toUpperCase();
    
    return (
        <div>
            {upperCaseText}
        </div>
    )
}

export default UpperCaseOutput;