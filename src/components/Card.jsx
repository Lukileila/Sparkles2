/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function Card({ id, title, image, blurb }) {
  const navigate = useNavigate();

  const handleLearnMore = (e) => {
    e.preventDefault();
    navigate(`/singleproduct/${id}`);
  };

  return (
    <div className="card transform hover:scale-105 w-50 h-120 bg-base-100 shadow-xl mb-8 buttonShadow mx-4">
      <figure>
        <img className="object-cover aspect-video rounded max-w-[500px]" src={image.fields.file.url} alt="comics" />
      </figure>
      <div className="card-body h-1/2 flex flex-col justify-between">
        <div>
          <h2 className="card-title">{title}</h2>
          <p>{blurb}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary buttonShadow" onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
