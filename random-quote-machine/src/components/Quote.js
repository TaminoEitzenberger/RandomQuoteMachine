import React from "react";
import Button from "./Button.js";
import TweetButton from "./TweetButton.js";

function Quote(props) {
    return (
        <div id='quote-container'>
            <div id='quote-content'>
                <div id='text'>{props.text}</div>
                <div id='author'>{props.author.split(',')[0]}</div>
            </div>
            <div id='controls'>
                <Button 
                    id='new-quote' 
                    text='new quote' 
                    color={props.color}
                    onClick={props.setRandomIndex}/>
                <TweetButton 
                    id='tweet-quote' 
                    text={props.text} 
                    author={props.author.split(',')[0]} 
                    color={props.color} />
                
            </div>
        </div>
    );
}

export default Quote;