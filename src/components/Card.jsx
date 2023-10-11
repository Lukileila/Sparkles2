/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function Card({id, title, image, blurb}){    

    const navigate = useNavigate();

    const handleLearnMore = (e) => {
   e.preventDefault();
   navigate(`/singleproduct/${id}`);
}



    return (
        
        <div className="card transform hover:scale-105  w-96 bg-base-100 shadow-xl mb-8">
        {image?
          <figure><img src={image.fields.file.url} alt="comic image" /></figure> :
          <figure><img src={"https://www.allianceplast.com/wp-content/uploads/no-image-1024x1024.png"} alt="no image available" /></figure>
        }
     {/*    <figure><img src={image.fields.file.url} alt="comics" /></figure> */}
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
