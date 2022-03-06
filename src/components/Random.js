

export default function Random(props){

    const resultRan = Math.floor(Math.random()*(props.max - props.min + 1) + props.min) 

    return(
       <div className="IdCard"> 
        <span> Random value between {props.min} and {props.max} {"=>"} {resultRan} </span>

       </div>
    )
}