import React from 'react';

export default function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){

    let imgSrc=""
    let width = 0

    switch(type){
        case "Visa":
            imgSrc = "/images/visa-logo.png";
            width = 70;
            break;
    
        case "Master Card":
            imgSrc = "/images/mastercard-logo.png";
            width = 50;
            break;
    
        default:
            break;
    }

    return(
        <div className="creditCard">
  
       <div style={{backgroundColor: bgColor, color: color}} className="creditBox">
        <span>
        <img src={imgSrc} alt="brand" width={width}></img> 
        </span>
        <span>
        <b>···· ···· ···· {number.slice(-4)}</b> 
        </span>
        <span>
        <b> Expires {String(expirationMonth).padStart(2,'0')}{"/"}{expirationYear.toString().slice(-2)}</b> 
        </span>
        <span>
        <b>{bank}</b> 
        </span>
        <span>
        <b>{owner}</b> 
        </span>
        </div>
      </div>
    )
}
