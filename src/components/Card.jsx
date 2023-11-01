/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function Card({singleProduct:{productID,Title, ImageURL, Blurb}}) {
  /* productID, *//*  Title, imageURL, Blurb  */
  const navigate = useNavigate();
  console.log("hi from the Card!");

const handleLearnMore = (e) => {
    e.preventDefault();
    navigate(`/singleproduct/${productID}`);
  }; 

  return (
    <div className="card transform hover:scale-105 w-50 h-120 bg-base-100 shadow-xl mb-8 buttonShadow mx-4">
      {console.log(`hi from the Card Section return!`,ImageURL)}
      <figure>
        <img className="object-cover aspect-video rounded max-w-[500px]" src={ImageURL} alt="comics" />
      </figure>
      <div className="card-body h-1/2 flex flex-col justify-between">
        <div>
          <h2 className="card-title">{Title}</h2>
          <p>{Blurb}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary buttonShadow" onClick={handleLearnMore} >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
