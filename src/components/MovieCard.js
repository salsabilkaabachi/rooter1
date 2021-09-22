
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function MovieCard({ el, film, setFilm, i })
 {
  return (
    <div className="card"style={{ width: "30rem" ,borderStyle:'revert',backgroundColor:'black',color:'black',borderRadius:'15px'}}>
      <h3 style={{fontFamily:'Abril Fatface' , textAlign:'center',color:"white"}}>{el.title}</h3>
      <img
        src={el.src}
        alt=""
        style={{ marginLeft:"auto", marginRight:"auto",height: "25rem", width:'20rem',borderRadius:'10px', textAlign:'center' }}
      />
      <p style={{marginLeft:"auto", marginRight:"auto" , fontFamily:"fantasy" ,color:"white"}}>{el.year} </p>
      <p  style={{fontFamily:' Helvetica' , textAlign:'center',color:"white"}} >{el.description}</p>
      <div style={{marginLeft:"auto", marginRight:"auto"}}>
         
           <ReactStars value={el.rating} size={50} color="#ffd700" />
           <Link to ={`/description/${el.id}`}>
           <button className='button'>More Details</button>
           </Link>
      </div>
     
    </div>
    
  );
}

export default MovieCard;