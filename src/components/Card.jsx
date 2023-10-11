/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function Card({blurb, image, title, id}){    

    const navigate = useNavigate();

    const handleLearnMore = (e) => {
   e.preventDefault();
   navigate(`/singleproduct/${id}`);
}


    return (
        
        <div className="card transform hover:scale-105  w-96 bg-base-100 shadow-xl mb-8">
        <figure><img src={image.fields.file.url} alt="comics" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{blurb}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleLearnMore}>Learn More</button>
          </div>
        </div>
      </div>
     
    )
}
