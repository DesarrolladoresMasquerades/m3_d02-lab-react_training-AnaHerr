import Rating from "./Rating"

export default function DriverCard({name, rating, img, car}){


    return(
     <div className="driverCard"> 
       <img src={img} alt="ImgPict" className="driverImg"></img>
      <div> 
     <h2>{name}</h2>
     <Rating>{rating}</Rating>
     <span>{car.model} {"-"} {car.licensePlate}</span>
     </div>
     </div>
    )
}