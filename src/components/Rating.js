

export default function Rating(props){

   let stars = Math.round(props.children)
   let starStrng = ""

    switch(stars){
        case 1:
           starStrng = "★☆☆☆☆";
            break;
    
        case 2:
           starStrng = "★★☆☆☆";
            break;
    
        case 3:
           starStrng = "★★★☆☆";
            break;
    
        case 4:
           starStrng = "★★★★☆";
            break;
    
        case 5:
           starStrng = "★★★★★";
            break;
    
        default:
           starStrng = "☆☆☆☆☆";
            break;
    }

    return(
        <div> 
        {starStrng}
        </div>
    )
}