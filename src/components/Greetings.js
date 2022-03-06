import React from 'react';

export default function Greetings(props){

     const lang = props.lang
     let greetingL = ""

    switch(lang){
        case "de":
            greetingL = "Hallo";
            break;
    
        case "fr":
            greetingL = "Bonjour";
            break;
    
        case "es":
            greetingL = "Hola";
            break;
    
        default:
            greetingL = "Hello";
            break;
    }

    return(
        <div className="IdCard">
       <span> {greetingL} {props.children} </span>

        </div>
    )
}

