import React from 'react';

export default function IdCard(props){

    const options = {weekday: "long", day: "numeric", month:"long", year: "numeric"}

    return(
        <div className="IdCard">
    
          <img src={props.picture} alt="ImgPict"></img>
    
         <div>
          <span>
          <b>Last name:</b> {props.lastName}
          </span>
          <span>
          <b>Name:</b> {props.firstName}
          </span>
          <span>
          <b>Gender:</b> {props.gender}
          </span>
          <span>
          <b>Height:</b> {props.height}
          </span>
          <span>
          <b>Birth:</b> {props.birth.toLocaleDateString("en-US", options)}
          </span>
          </div>
        </div>
    )

}