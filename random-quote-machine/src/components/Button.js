import React from "react";

function Button(props) {
    return (
        <button 
            id={props.id} 
            style={{backgroundColor: props.color}}
            onClick={props.onClick}>
                {props.text}
        </button>
    );
}

export default Button;