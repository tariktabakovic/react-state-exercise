import React from 'react';

function Input (props){
    return (
        <div>
            <input value = {`${props.textValue}`}>
            </input>
            <label>
                Type Here!
            </label>
        </div>
    )
}

export default Input;