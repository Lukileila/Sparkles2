import { useNavigate } from "react-router-dom";

export default function Card(){    

    const navigate = useNavigate();

    const handleLearnMore = (e) => {
   e.preventDefault();
   navigate("/singleproduct");
}

    return (
        
        <div className="card transform hover:scale-105  w-96 bg-base-100 shadow-xl mb-8">
        <figure><img src='https://wallpapers.com/images/hd/comic-book-background-a09lfl6egxpsqgwc.jpg' alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleLearnMore}>Learn More</button>
          </div>
        </div>
      </div>
     
    )
}
