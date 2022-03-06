import React from 'react';

export default function BoxColor(props){

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    let r = props.r
    let g = props.g
    let b = props.b
    
    const hexColor = rgbToHex(r,g,b)
     
    return(
        <div style={{backgroundColor: hexColor}} className="colorBox"> 
        <span> rgb({props.r}, {props.g}, {props.b})</span>
        <span> {hexColor} </span>
        </div>
    )
}